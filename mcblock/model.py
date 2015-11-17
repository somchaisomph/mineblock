import subprocess
import os
from flask import request


class Model(object):
	def __init__(self):
		self.mc_proc = None


	def save_and_run(self,data,filename):
		if not self.is_mc_running() :
			return "mc not started"	
		mc_file_loc = os.getcwd()+"/mcblock/mc_code/"+filename
		try:		
			with open(mc_file_loc,"w") as mcfile :
				mcfile.write("import minecraft\n")
				mcfile.write("import block as block\n")
				mcfile.write("import minecraftturtle\n")
				mcfile.write("import time\n\n")
				mcfile.write("def clear_area(size,cpos):\n")
				mcfile.write("   x=int(cpos.x)\n")
				mcfile.write("   y=int(cpos.y)\n")
				mcfile.write("   z=int(cpos.z)\n")
				mcfile.write("   for ypos in range(y,y+size,1):\n")
				mcfile.write("      for xpos in range(x,x+size,1) :\n")		
				mcfile.write("         for zpos in range(z,z+size,1):\n")
				mcfile.write("	          mc.setBlock(xpos,ypos,zpos,block.AIR.id)\n\n\n")

				mcfile.write("mc = minecraft.Minecraft.create()\n")
				mcfile.write("current_point = mc.player.getPos()\n")				
				mcfile.write("i_am = minecraftturtle.MinecraftTurtle(mc,current_point)\n")
				mcfile.write(data)
			
			self.mc_proc = subprocess.Popen(["python",mc_file_loc],stdout=subprocess.PIPE)
                        self.mc_proc.wait()
                        return str(self.mc_proc.returncode)
			
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

	

	
