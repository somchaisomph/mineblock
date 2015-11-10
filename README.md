<h1><img src="https://github.com/somchaisomph/mineblock/blob/master/mcblock/static/images/icons/mineblock.png" align="top"> MineBlock</h1>
<p>
Minecraft Pi Edition(http://pi.minecraft.net/) is not only a game but also instruction media for learning to program and algorithmic thinking. It has been bundled in Raspbian already, you do not need to install it yourself. To start learning program with Minecraft, you need some knowledge about Python syntax and it is not always easy for some starters. I has wrapped Python API with Blockly (https://developers.google.com/blockly/). This makes new starters or kids do not need to concern about Python syntax and be able to focus on algorithmic thinking only.
</p>
<h2>Installation</h2>
<h3>Flask</h3>(http://flask.pocoo.org/)
<p>1) If you do not have  pip on your Raspberry Pi.</p>
<pre>$ sudo apt-get install python-pip</pre>
<p>2) install Flask itself.</p>
<pre>$ sudo pip install flask</pre>
<p>If you want to install Flask with virtualenv environment please visit : http://flask.pocoo.org/docs/0.10/installation/#installation
</p>
<h3>PySide and PyQt4 (Option)</h3>
<p>
This step is an option you do not need to install if you do not want to. Since MineBlock is web application you can use Epiphamy web browser bundled with Raspbian (or anyone you install by yourself) to run MineBlock. Just type this url : http://localhost:5000 to web browser. To install PySide and PyQt4 (at time of writing this document, only pyqt4 is supported in Raspbian Jessie)  :
</p>
<pre>
$ sudo apt-get install python-pyside \
python-pyside.qtgui \
python-pyside.qtwebkit \
python-pyside.qtxml \
python-qt4 \
python-qt4-dev
</pre>

<h3>Get MineBlock</h3>
<p>1) If you do not have git on your Raspberry Pi, install it :</p>
<pre>
$ sudo apt-get install git
</pre>
<p>2) Get MineBlock to your Raspberry Pi.</p>
<pre>
$ git clone https://github.com/somchaisomph/mineblock.git
$ cd mineblock
</pre>
<h3>Start MineBlock</h3>
<p>
 1) Mineblock is actually web service, you need to start it before using it.
</p>
<pre>
$ cd  /home/pi/mineblock 
$ pytho run.py
</pre>
<p>
2) Open Minecraft Pi.
</p>
<p>
3) You have 2 choices to open MineBlock 
</p>
<ol>
<li>By web browser with url : http://localhost:5000   or </li>
<li>By calling mineblock.py
<pre>
$ python mineblock.py
</pre>
</li>
</ol>
<h3>Something special</h3>
<p>
1) To create desktop shortcut of MineBlock:
   <ol>
    <li> <p>Open "mineblock.desktop"  with your text editor you will see </p>
    <pre>
   Exec=python <i>[your absolute path of mineblock directyr]</i>/mineblock.py
   Icon= <i>[your absolute path of mineblock directory]</i>/mcblock/static/images/icons/mineblock.png 
  </pre>
   <p>
    Replace <i>[your absolute path of mineblock directory]</i> with absolute path where you placed MineBlock (It should be "/home/pi/mineblock")
   </p>
    </li>
    <li>
     Copy mineblock.desktop to /usr/share/applications
    </li>
  </ol>  
  </p>

<p>2) To start MineBlock web service at boot time </p>
<p><b>Raspbian Wheezy :</b></p>
<pre>
$ cd /etc/init.d
$ sudo nano rc.local
</pre>
<p>
Scroll to bottom then insert these two lines to the bottom of rc.local (don't forget to change <i>[your absolute path of mineblock directory]</i> to real path).
</p>
<pre>
cd [your absolute path of mineblock directory]
python run.py
</pre>
<p><b>Raspbian Jessie :</b></p>
<ol>
<li><p>
Create a blank file and give it a name with .sh  for example start.sh and type these two lines.
</p>
<pre>
cd /home/pi/mineblock
python run.py
</pre>
<p>
Save it and make it executable with command :
</p>
<pre>
sudo chmod +x start.sh
</pre>
<li>
To add it to cronjob you need to modify crontab which is table containing list of jobs to de run according to their detail.
<pre>
$ sudo crontab -e
</pre>
<p>
You may be asked to select editor to modify crontab, choose any one is ok. Scroll to the bottom and add this command :
</p>
<pre>
@reboot /home/pi/mineblock/start.sh
</pre>
<p>
It tells Raspberry Pi'cron to call /home/pi/mineblock/start.sh every boot, reboot, restart. Try reboot your Raspberry Pi. After rebooting, check if mineblock is running with 
</p>
<pre>
$ ps -ef | grep python
</pre>
<p>
You should see :
<pre>
/usr/bin/python run.py
</pre>
appear on screen. 
</p>
</li>
</ol>

Ok Let's fun !  For more information, visit my blog http://tkblocky.blogspot.com/
