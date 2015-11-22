from PyQt4 import QtCore, QtGui, QtWebKit  
from PyQt4.QtGui import QIcon


class MineBlockApp(QtWebKit.QWebView):  
    def __init__(self, parent=None):
        super(MineBlockApp, self).__init__(parent)
        self.mineblock_url="http://localhost:5000"
        self.setWindowTitle("MineBlock")
        self.setWindowIcon(QIcon('/home/pi/blockly-proj/mcblock/static/images/icons/mineblock.png')) 
      
        #add javascript bridge
        self.page().mainFrame().addToJavaScriptWindowObject("outer", self)

        self.page().setLinkDelegationPolicy(QtWebKit.QWebPage.DontDelegateLinks)
        #self.linkClicked.connect(self.link_clicked)
	#self.urlChanged.connect(self.url_changed)
        self.loadFinished.connect(self.on_loadFinished)
        self.load(QtCore.QUrl(self.mineblock_url))

    @QtCore.pyqtSlot(str)  
    def showMessage(self, message):
        print "Message from website:", message
        
    @QtCore.pyqtSlot(str,str)  
    def save_to_disk(self,data,fn):
	import os
	data_file_loc = os.getenv('HOME')+"/"+fn
	try:		
	   with open(data_file_loc,"w") as data_file :
		data_file.write(data)
        except:
           pass
        #call javascript function
        self.page().mainFrame().evaluateJavaScript("export_done()") 

    @QtCore.pyqtSlot()
    def on_loadFinished(self):
        frame = self.page().mainFrame()
        self.page().setViewportSize(frame.contentsSize())	
        self.resize(frame.contentsSize())
'''    
    def url_changed(self):
   	print self.url().toString()
        

    def link_clicked(self,url):
	print url
'''        

if __name__ == "__main__":
    import sys

    app = QtGui.QApplication(sys.argv)
    app.setApplicationName('MineBlockApp')

    main = MineBlockApp()
    main.show()

    sys.exit(app.exec_())
