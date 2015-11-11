import subprocess
import os
from flask import request


class Model(object):
	def __init__(self):
		self.app_name = "mcblock"


	def save_and_run(self,data,filename):
		if not self.is_mc_running() :
			return "mc not started"	
		#mc_file_loc = os.getcwd()+"/"+self.app_name+"/data/"+filename
		mc_file_loc = os.getcwd()+"/mcblock/mc_code/"+filename
		try:		
			with open(mc_file_loc,"w") as mcfile :
				mcfile.write("import minecraft\n")
				mcfile.write("import block as block\n")
				mcfile.write("import minecraftturtle\n")
				mcfile.write("import time\n\n")
				mcfile.write("mc = minecraft.Minecraft.create()\n")
				mcfile.write("current_point = mc.player.getPos()\n")
				mcfile.write("i_am = minecraftturtle.MinecraftTurtle(mc,current_point)\n")
				mcfile.write(data)
				
			subprocess.call("python "+mc_file_loc,shell=True)
			return "ok"
		except:
			return "fail"
			
	def is_mc_running(self):
		pid="minecraft-pi"
		ps= subprocess.Popen("ps -ef | grep "+pid, shell=True, stdout=subprocess.PIPE)
    		output = ps.stdout.read()
    		ps.stdout.close()
    		ps.wait()
		if '/bin/sh /usr/bin/minecraft-pi' in output :
    			return True
		else :
			return False

	def start_mc(self):
		try:
		   if not self.is_mc_running() :
			subprocess.call("minecraft-pi",shell=True)
			return '1'
		   else :
                        return '0'
		except:
			return '-1'

	

	
