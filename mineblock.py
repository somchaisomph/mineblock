import sys 
from PyQt4 import QtGui
from PySide.QtCore import QUrl, QSize
from PySide.QtGui import QApplication, QMainWindow, QWidget, QIcon
from PySide.QtWebKit import QWebView


class Browser(QMainWindow):

    def __init__(self):
        QMainWindow.__init__(self)
        self.resize(900, 700)
	self.setWindowTitle("MineBlock")
	self.setWindowIcon(QIcon('/home/pi/blockly-proj/mcblock/static/images/icons/mineblock.png')) 
        self.web_view = QWebView()
        self.setCentralWidget(self.web_view)

        self.web_view.loadFinished.connect(self._load_finished)

    def _load_finished(self):
        frame = self.web_view.page().mainFrame()
        self.web_view.page().setViewportSize(frame.contentsSize())
        self.resize(frame.contentsSize())
        html_data = frame.toHtml()


if __name__ == '__main__': 
    app = QApplication(sys.argv) 
    browser = Browser() 
    r = QUrl("http://localhost:5000")
    browser.web_view.load(r)
    browser.show()
    app.exec_()
