import minecraft
import block as block
import minecraftturtle
import time

mc = minecraft.Minecraft.create()
current_point = mc.player.getPos()
i_am = minecraftturtle.MinecraftTurtle(mc,current_point)
start_x = None
start_y = None
start_z = None
num_blocks = None
i = None


start_x = mc.player.getPos().x
start_y = mc.player.getPos().y
start_z = mc.player.getPos().z
num_blocks = 10
i_am.setheading(0)
i_am.penblock(42)
for i in range(0, 9, 2):
  i_am.setposition(start_x,start_y,start_z)
  for count in range(4):
    i_am.forward((num_blocks - i))
    i_am.right(90)
  start_x = start_x + 1
  start_y = start_y + 1
  start_z = start_z + 1
mc.postToChat('Finish')
