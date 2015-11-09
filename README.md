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
<h3>PySide and PyQt4</h3>
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
<h3>A little bit further. </h3>
<p>1) Open file "mineblock.desktop"  with your text editor then you can see liens :</p>
<pre>
 Exec=python [your absolute path of mineblock directyr]/mineblock.py
Icon= [your absolute path of mineblock directory]/mcblock/static/images/icons/mineblock.png
</pre>
<p>
Replace [your absolute path of mineblock directory] with yours, save it. Copy mineblock.desktop to /usr/share/applications.

<p>2) Make mineblock start at boot time </p>
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
<pre>
$ cd /etc/
$ sudo nano profile
</pre>
<p>
Scroll to bottom then insert these two lines to the bottom of rc.local (don't forget to change <i>[your absolute path of mineblock directory]</i> to real path).
</p>
<pre>
cd [your absolute path of mineblock directory]
python run.py
</pre>

<p>
save then reboot. After rebooting, check if mineblock is running with 
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
<h3>How to play</h3>
<p>
1) Open Mineblock from menu bar (in case of installing PySide/PyQT4)

</p>
