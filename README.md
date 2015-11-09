<h1><img src="https://www.dropbox.com/s/dllvwp7776idjms/mineblock.png?dl=0" align="middle"> MineBlock</h1>
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
<p>
1) Edit file "mineblock.desktop" :
</p>
