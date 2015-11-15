from flask import render_template,request,send_from_directory
from flask import g
from flask import jsonify
from mcblock import app
from model import Model
import sqlite3
import os

model = Model()


def connect_db():
   DATABASE=os.getcwd()+"/mcblock/data/blocks-shelve.sqlite"
   return sqlite3.connect(DATABASE)



def query_db(query, args=(),one=False):
   cur = g.db.execute(query,args)
   rv = [dict((cur.description[idx][0],value)
                    for idx, value in enumerate(row))  for row in cur.fetchall()]
   cur.close()    
   return (rv[0] if rv else None) if one else rv

def get_total_rows():
    cur = g.db.execute("select count(*) from blocks")
    rows = cur.fetchall()
    cur.close()
    return int(rows[0][0])

def get_total_pages(rows_per_page=10):
    total_rows = get_total_rows();
    pages = total_rows / rows_per_page
    if total_rows % rows_per_page > 0 :
       pages = pages + 1
    return pages

@app.before_request
def before_request():
   g.db = connect_db()

@app.after_request
def after_request(response):
    g.db.close()
    return response

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/')
def index():
	return render_template("index.html")

@app.route('/js/<path:filename>')
def send_script(filename):
   return send_from_directory(app.static_folder+'/js',filename)

@app.route('/images/<path:filename>')
def send_images(filename):
   return send_from_directory(app.static_folder+'/images',filename)

@app.route('/pages/<path:filename>')
def send_pages(filename):
   return send_from_directory(app.static_folder+'/pages',filename)

@app.route('/css/<path:filename>')
def send_css(filename):
   return send_from_directory(app.static_folder+'/css/',filename)

@app.route('/fonts/<path:filename>')
def send_fonts(filename):
   return send_from_directory(app.static_folder+'/fonts/',filename)

@app.route('/media/<path:filename>')
def send_media(filename):
   return send_from_directory(app.static_folder+'/media/',filename)

@app.route('/data/<path:filename>')
def send_data(filename):
   return send_from_directory(app.static_folder+'/data/',filename)
   
@app.route('/process',methods=['GET','POST'])
def do_process():
	if request.method=='GET' :
		mc_code = request.args.get('mc_code')		
		return model.save_and_run(mc_code,"mc_code.py")
	else :
		return "invalid method"

@app.route('/shutdown',methods=['POST'])
def shutdown():
    model.shutdown_server()
    return 'Server shutting down...'

@app.route('/save_blocks',methods=['GET'])
def save_blocks():
    try:
       data = request.args.get("data")
       key = request.args.get("key")
       sql="INSERT INTO blocks(key,data) VALUES('"+key+"','"+data+"')"
       
       g.db.execute(sql)
       g.db.commit()   
       return "ok"
    except:
       return "fail"

@app.route('/get_blocks',methods=['POST'])
def get_blocks():
  
      limit = request.form["limit"]
      offset  = request.form["offset"]
      current_page = request.form["request_page"]
      
      if int(current_page) == 0 :
         total_page = str(get_total_pages(int(limit)))
      else :
         total_page = request.form["total_page"]
      print limit,offset,current_page,total_page
      sql = "select id,key,access_time from blocks order by access_time limit "+str(limit)+" offset "+str(offset)+";"
      blocks_dict = query_db(sql)   
      print blocks_dict   
    
      return jsonify(result=[{'page_info':{'total_page':total_page,'current_page':current_page}},{'blocks':blocks_dict}])
    

@app.route('/get_block_by_id',methods=['GET'])
def get_block_by_id():
   try:
      block_id = request.args.get("block_id")
      sql = "select data from blocks where id="+str(block_id)
      block_data = query_db(sql)
      return jsonify(result=block_data)
   except:
      return jsonify(result=[""])
   

@app.route('/delete_blocks_by_id',methods=['POST'])
def delete_blocks_by_id():
    try:   
       data = request.get_json()
       ids = data['ids']
       size= len(ids)
       sql = "delete from blocks where "
       for d in range(size-1): 
         sql = sql+"id ="+str(ids[d])+" or "
       sql=sql+"id = "+str(ids[size-1])
       print sql
       g.db.execute(sql)
       g.db.commit()
       return "ok"
    except:
       return "fail"
 
