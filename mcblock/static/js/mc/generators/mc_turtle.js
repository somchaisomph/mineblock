// Moving Direction
Blockly.Blocks['place_block_hor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Place Blocks ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Direction :")
        .appendField(new Blockly.FieldDropdown([["Forward", "fw"], ["Backward", "bw"]]), "direction");
    this.appendValueInput("num_blocks")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Number of Blocks :");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['place_block_hor'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_num_blocks = Blockly.Python.valueToCode(block, 'num_blocks', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if(dropdown_direction == "fw"){
     code = 'i_am.forward('+value_num_blocks+")\n";
  }else if (dropdown_direction == "bw"){
     code = 'i_am.backward('+value_num_blocks+')\n';
  }
  return code;
};

// Turnning
Blockly.Blocks['turnning_dir'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Turn");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["LEFT", "lt"], ["RIGHT", "rt"], ["UP", "up"], ["DOWN", "dn"]]), "turn_direction");
    this.appendValueInput("num_blocks")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(", Angle (0-359):");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['turnning_dir'] = function(block) {
  var dropdown_turn_direction = block.getFieldValue('turn_direction');
  var value_num_blocks = Blockly.Python.valueToCode(block, 'num_blocks', Blockly.Python.ORDER_ATOMIC);
  if (value_num_blocks < 0) value_num_blocks = value_num_blocks * -1;
  if(value_num_blocks >= 360 ) value_num_blocks = value_num_blocks - 360;
  
  var code = '';
  switch(dropdown_turn_direction){
     case "lt" : code = 'i_am.left('+value_num_blocks+")\n"; break;
     case "rt" : code = 'i_am.right('+value_num_blocks+")\n";break;
     case "up" : code = 'i_am.up('+value_num_blocks+")\n";break;
     case "dn" : code = 'i_am.down('+value_num_blocks+")\n";break;
         
  }
  return code;
};

// Speed
Blockly.Blocks['steve_speed'] = {
  init: function() {
    this.appendValueInput("moving _speed")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Set Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_speed'] = function(block) {
  var value_moving__speed = Blockly.Python.valueToCode(block, 'moving _speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.speed('+value_moving__speed+')\n';
  return code;
};

// Set Pen
Blockly.Blocks['steve_set_pen_block'] = {
  init: function() {
    this.appendValueInput("pen_block_i")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Set Block Type: ");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_set_pen_block'] = function(block) {
  var value_pen_block_i = Blockly.Python.valueToCode(block, 'pen_block_i', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.penblock('+value_pen_block_i+')\n';
  return code;
};
// Set position to
Blockly.Blocks['set_pos_to'] = {
  init: function() {
    this.appendValueInput("pos_x")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Set Position to X :");
    this.appendValueInput("pos_y")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y :");
    this.appendValueInput("pos_z")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z :");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['set_pos_to'] = function(block) {
  var value_pos_x = Blockly.Python.valueToCode(block, 'pos_x', Blockly.Python.ORDER_ATOMIC);
  var value_pos_y = Blockly.Python.valueToCode(block, 'pos_y', Blockly.Python.ORDER_ATOMIC);
  var value_pos_z = Blockly.Python.valueToCode(block, 'pos_z', Blockly.Python.ORDER_ATOMIC);
  var  code = 'i_am.setposition('+value_pos_x+','+value_pos_y+','+value_pos_z+')\n';
  return code;
};

// Block
Blockly.Blocks['steve_block_grp_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Block (Group 1)")
        .appendField(new Blockly.FieldDropdown([
        ["AIR", "0"], ["STONE", "1"], ["GRASS", "2"],
        ["DIRT", "3"],
        ["COBBLESTONE", "4"],
        ["WOOD_PLANKS", "5"],
        ["SAPLING", "6"],
        ["BEDROCK", "7"],
        ["WATER_FLOWING", "8"],
        ["WATER_STATIONARY", "9"],
        ["STONE_SLAB_DOUBLE","43"],
["STONE_SLAB","44"],
["BRICK_BLOCK","45"],
["TNT","46"],
["BOOKSHELF","47"],
["MOSS_STONE","48"],
["OBSIDIAN","49"],
["TORCH","50"],
["FIRE","51"],
["TAIRS_WOOD","53"]
       
        ]), "block_grp_1_id");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_block_grp_1'] = function(block) {
  var dropdown_block_grp_1_id = block.getFieldValue('block_grp_1_id');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.Python.ORDER_NONE];
  return [dropdown_block_grp_1_id,Blockly.Python.ORDER_ATOMIC]
};

Blockly.Blocks['steve_block_grp_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Block (Group 2)")
        .appendField(new Blockly.FieldDropdown([
        ["SAND", "12"],
        ["GRAVEL", "13"],
        ["LAVA_FLOWING", "10"],
        ["LAVA_STATIONARY", "11"],
        ["GLASS","20"],
        ["FIRE","51"],
["BEDROCK_INVISIBLE","95"],
["STONE_BRICK","98"],
["GLASS_PANE","102"],
["MELON","103"],
["FENCE_GATE","107"],
["GLOWING_OBSIDIAN","246"],
["NETHER_REACTOR_CORE","247"],
        ]), "block_grp_2_id");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_block_grp_2'] = function(block) {
  var dropdown_block_grp_2_id = block.getFieldValue('block_grp_2_id');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.Python.ORDER_NONE];
  return [dropdown_block_grp_2_id,Blockly.Python.ORDER_ATOMIC]
};
/*
AIR                 = Block(0)
STONE               = Block(1)
GRASS               = Block(2)
DIRT                = Block(3)
COBBLESTONE         = Block(4)
WOOD_PLANKS         = Block(5)
SAPLING             = Block(6)
BEDROCK             = Block(7)
WATER_FLOWING       = Block(8)
WATER               = WATER_FLOWING
WATER_STATIONARY    = Block(9)
LAVA_FLOWING        = Block(10)
LAVA                = LAVA_FLOWING
LAVA_STATIONARY     = Block(11)




BED                 = Block(26)
COBWEB              = Block(30)
GRASS_TALL          = Block(31)
WOOL                = Block(35)
FLOWER_YELLOW       = Block(37)
FLOWER_CYAN         = Block(38)
MUSHROOM_BROWN      = Block(39)
MUSHROOM_RED        = Block(40)
GOLD_BLOCK          = Block(41)
IRON_BLOCK          = Block(42)
STONE_SLAB_DOUBLE   = Block(43)
STONE_SLAB          = Block(44)
BRICK_BLOCK         = Block(45)
TNT                 = Block(46)
BOOKSHELF           = Block(47)
MOSS_STONE          = Block(48)
OBSIDIAN            = Block(49)
TORCH               = Block(50)
FIRE                = Block(51)
STAIRS_WOOD         = Block(53)
CHEST               = Block(54)
DIAMOND_ORE         = Block(56)
DIAMOND_BLOCK       = Block(57)
CRAFTING_TABLE      = Block(58)
FARMLAND            = Block(60)
FURNACE_INACTIVE    = Block(61)
FURNACE_ACTIVE      = Block(62)
DOOR_WOOD           = Block(64)
LADDER              = Block(65)
STAIRS_COBBLESTONE  = Block(67)
DOOR_IRON           = Block(71)
REDSTONE_ORE        = Block(73)
SNOW                = Block(78)
ICE                 = Block(79)
SNOW_BLOCK          = Block(80)
CACTUS              = Block(81)
CLAY                = Block(82)
SUGAR_CANE          = Block(83)
FENCE               = Block(85)
GLOWSTONE_BLOCK     = Block(89)
BEDROCK_INVISIBLE   = Block(95)
STONE_BRICK         = Block(98)
GLASS_PANE          = Block(102)
MELON               = Block(103)
FENCE_GATE          = Block(107)
GLOWING_OBSIDIAN    = Block(246)
NETHER_REACTOR_CORE = Block(247)
*/
Blockly.Blocks['steve_block_grp_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Block (Group 3)")
        .appendField(new Blockly.FieldDropdown([
        ["GOLD_ORE","14"],
        ["IRON_ORE","15"],
        ["COAL_ORE", "16"],
        ["SAND","12"],
	["GRAVEL","13"],
	["WOOD","17"],
	["LEAVES","18"],
        ["LAPIS_LAZULI_ORE","21"],
        ["LAPIS_LAZULI_BLOCK","22"],
        ["SANDSTONE","24"],
["DOOR_IRON","71"],
["REDSTONE_ORE","73"],
["SNOW","78"],
["ICE","79"],
["SNOW_BLOCK","80"],
["CACTUS","81"],
["CLAY","82"],
["SUGAR_CANE","83"],
["FENCE","85"],
["GLOWSTONE_BLOCK","89"],
        ]), "block_grp_3_id");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_block_grp_3'] = function(block) {
  var dropdown_block_grp_3_id = block.getFieldValue('block_grp_3_id');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.Python.ORDER_NONE];
  return [dropdown_block_grp_3_id,Blockly.Python.ORDER_ATOMIC]
};

Blockly.Blocks['steve_block_grp_4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Block (Group 4)")
        .appendField(new Blockly.FieldDropdown([
         ["BED","26"],
        ["COBWEB","30"],
        ["GRASS_TALL","31"],
        ["WOOL","35"],
        ["FLOWER_YELLOW","37"],
        ["FLOWER_CYAN","38"],
        ["MUSHROOM_BROWN","39"],
        ["MUSHROOM_RED","40"],
        ["GOLD_BLOCK","41"],
        ["IRON_BLOCK","42"],
["CHEST","54"],
["DIAMOND_ORE","56"],
["DIAMOND_BLOCK","57"],
["CRAFTING_TABLE","58"],
["FARMLAND","60"],
["FURNACE_INACTIVE","61"],
["FURNACE_ACTIVE","62"],
["DOOR_WOOD","64"],
["LADDER","65"],
["STAIRS_COBBLESTONE","67"],
        ]), "block_grp_4_id");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_block_grp_4'] = function(block) {
  var dropdown_block_grp_4_id = block.getFieldValue('block_grp_4_id');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.Python.ORDER_NONE];
  return [dropdown_block_grp_4_id,Blockly.Python.ORDER_ATOMIC]
};


// Pen
Blockly.Blocks['steve_pen_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Pen (Up/Down)")
        .appendField(new Blockly.FieldDropdown([["Up", "0"], ["Down", "1"]]), "pen_status");
    this.setOutput(true, "Number");
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_pen_status'] = function(block) {
  var dropdown_pen_status = block.getFieldValue('pen_status');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  if(dropdown_pen_status=="0")
	return "i_am.penup()\n";
  else if(dropdown_pen_status=="1")
    return "i_am.pendown()\n";
  //return [code, Blockly.Python.ORDER_NONE];
};

// Set heading
Blockly.Blocks['steve_set_heading'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Set Heading To (specify angle in degree)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['steve_set_heading'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.setheading('+value_name+')\n';
  return code;
};

// Vertical heading
Blockly.Blocks['steve_set_ver_heading'] = {
  init: function() {
    this.appendValueInput("vheading_angle")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Set Vertical Heading (specify angle in degree)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_set_ver_heading'] = function(block) {
  var value_vheading_angle = Blockly.Python.valueToCode(block, 'vheading_angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.setverticalheading('+value_vheading_angle+')\n';
  return code;
};

//Warp Steve to 
Blockly.Blocks['steve_set_position'] = {
  init: function() {
    this.appendValueInput("x_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Warp To X:");
    this.appendValueInput("y_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y:");
    this.appendValueInput("z_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['steve_set_position'] = function(block) {
  var value_x_pos = Blockly.Python.valueToCode(block, 'x_pos', Blockly.Python.ORDER_ATOMIC);
  var value_y_pos = Blockly.Python.valueToCode(block, 'y_pos', Blockly.Python.ORDER_ATOMIC);
  var value_z_pos = Blockly.Python.valueToCode(block, 'z_pos', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.setPos('+value_x_pos+','+value_y_pos+','+value_z_pos+')\n';
  return code;
};
//Get player position
Blockly.Blocks['get_player_position'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Get Player Position")
        .appendField(new Blockly.FieldDropdown([[": X", "xpos"], [": Y", "ypos"], [": Z", "zpos"], [": XYZ", "xyzpos"]]), "position_type");
    this.setOutput(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['get_player_position'] = function(block) {
  var dropdown_position_type = block.getFieldValue('position_type');
  var code = '';
  switch(dropdown_position_type){
    case "xpos": code="mc.player.getPos().x";break;
    case "ypos": code="mc.player.getPos().y";break;
    case "zpos": code="mc.player.getPos().z";break;
    case "xyzpos" :code="mc.player.getPos()"; break;
   
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};
/*

Blockly.Blocks['steve_where_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Steve's X Position");
    this.setOutput(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_where_x'] = function(block) {
  
  var code = 'mc.player.getPos().x';
  
  return [code, 20];
};

Blockly.Blocks['steve_where_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Steve's Y Position");
    this.setOutput(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_where_y'] = function(block) {

  var code = 'mc.player.getPos().y';

  return [code, 20];
};

Blockly.Blocks['steve_where_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Steve's Z Position");
    this.setOutput(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_where_z'] = function(block) {

  var code = 'mc.player.getPos().z';

  return [code, 20];
};
*/
// Get Tile position
// Get Tile Pos
Blockly.Blocks['steve_get_tile_pos_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Get Tile Position   X :");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_get_tile_pos_x'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.getTilePos().x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['steve_get_tile_pos_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Get Tile Position   Y :");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_get_tile_pos_y'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.getTilePos().y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['steve_get_tile_pos_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Get Tile Position   Z :");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_get_tile_pos_z'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.getTilePos().z';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Set Tile Pos
Blockly.Blocks['steve_set_tile_pos'] = {
  init: function() {
    this.appendValueInput("set_tile_pos_x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Set Tile Position   X :");
    this.appendValueInput("set_tile_pos_y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("   Y :");
    this.appendValueInput("set_tile_pos_z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("   Z :");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(130);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_set_tile_pos'] = function(block) {
  var value_set_tile_pos_x = Blockly.Python.valueToCode(block, 'set_tile_pos_x', Blockly.Python.ORDER_ATOMIC);
  var value_set_tile_pos_y = Blockly.Python.valueToCode(block, 'set_tile_pos_y', Blockly.Python.ORDER_ATOMIC);
  var value_set_tile_pos_z = Blockly.Python.valueToCode(block, 'set_tile_pos_z', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.setTilePos('+value_set_tile_pos_x+','+value_set_tile_pos_y+','+value_set_tile_pos_z+')\n';
  return code;
};




//Time delay
Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.appendValueInput("delay_val")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay (seconds)");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['time_sleep'] = function(block) {
  var value_delay_val = Blockly.Python.valueToCode(block, 'delay_val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+value_delay_val+')\n';
  return code;
};

//Clear Area
Blockly.Blocks['clear_blocks'] = {
  init: function() {
    this.appendValueInput("range")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Clear Space in rage :");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Python['clear_blocks'] = function(block) {
  var value_range = Blockly.Python.valueToCode(block, 'range', Blockly.Python.ORDER_ATOMIC);
  var code = 'clear_area('+value_range+',mc.player.getPos())\n';
  return code;
};
/*
Blockly.Blocks['steve_clear_area'] = {
  init: function() {
    this.appendValueInput("clear_x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Clear Space Blocks in X:");
    this.appendValueInput("clear_y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blocks in Y:");
    this.appendValueInput("clear_z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blocks in Z:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_clear_area'] = function(block) {
  var value_clear_x = Blockly.Python.valueToCode(block, 'clear_x', Blockly.Python.ORDER_ATOMIC);
  var value_clear_y = Blockly.Python.valueToCode(block, 'clear_y', Blockly.Python.ORDER_ATOMIC);
  var value_clear_z = Blockly.Python.valueToCode(block, 'clear_z', Blockly.Python.ORDER_ATOMIC);
  var code="cpos = mc.player.getTilePos()\n";
  code +="mc.setBlocks(cpos.x, cpos.y, cpos.z, cpos.x+int("+value_clear_x+"/2), cpos.y+int("+value_clear_y+"/2), cpos.z+int("+value_clear_z+"/2),block.AIR.id)\n"
  code += "mc.setBlocks(cpos.x, cpos.y, cpos.z, cpos.x-int("+value_clear_x+"/2), cpos.y-int("+value_clear_y+"/2), cpos.z-int("+value_clear_z+"/2),block.AIR.id)\n";
  
  return code;
};
*/
