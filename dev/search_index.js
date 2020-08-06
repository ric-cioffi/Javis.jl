var documenterSearchIndex = {"docs":
[{"location":"references/","page":"References","title":"References","text":"CurrentModule = Javis","category":"page"},{"location":"references/#Public-functions","page":"References","title":"Public functions","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"Modules = [Javis]\nPrivate = false","category":"page"},{"location":"references/#Javis.Action","page":"References","title":"Javis.Action","text":"Action\n\nDefines what is drawn in a defined frame range. \n\nFields\n\nframes: A range of frames for which the Action is called\nid::Union{Nothing, Symbol}: An id which can be used to save the result of func\nfunc::Function: The drawing function which draws something on the canvas.    It gets called with the arguments video, action, frame\ntransitions::Vector{Transition} a list of transitions that can be performed before the function gets called.\ninternal_transitions::Vector{InternalTransition}: Similar to transitions but holds the concrete information    whereas Transition can hold links to other actions which need to be computed first. See compute_transformation!\nopts::Any can hold any options defined by the user\n\n\n\n\n\n","category":"type"},{"location":"references/#Javis.Action-Tuple{Any,Function,Vararg{Any,N} where N}","page":"References","title":"Javis.Action","text":"Action(frames, func::Function, args...)\n\nThe most simple form of an action (if there are no args/kwargs) just calls func(video, action, frame) for each of the frames it is defined for.  args are defined it the next function definition and can be seen in action in this example javis\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.Action-Tuple{Any,Union{Nothing, Symbol},Function,Vararg{Javis.Transition,N} where N}","page":"References","title":"Javis.Action","text":"Action(frames, id::Union{Nothing,Symbol}, func::Function, transitions::Transition...; kwargs...)\n\nArguments\n\nframes: defines for which frames this action is called\nid::Symbol: Is used if the func returns something which shell be accessible by other actions later\nfunc::Function the function that is called after the transitions are performed\ntransitions::Transition... a list of transitions that are performed before the function func itself is called\n\nThe keywords arguments will be saved inside .opts as a Dict{Symbol, Any}\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.Line","page":"References","title":"Javis.Line","text":"Line\n\nA type to define a line by two points. Can be used i.e. in projection We mean the mathematic definition of a continuous line and not a segment of a line.\n\nFields\n\np1::Point: start point\np2::Point: second point to define the line\n\n\n\n\n\n","category":"type"},{"location":"references/#Javis.Rotation","page":"References","title":"Javis.Rotation","text":"Rotation <: Transition\n\nStores the rotation similar to Translation with from and to but also the rotation point.\n\nFields\n\nfrom::Union{Float64, Symbol}: The start rotation or a link to it\nto::Union{Float64, Symbol}: The end rotation or a link to it\ncenter::Union{Point, Symbol}: The center of the rotation or a link to it.\n\n\n\n\n\n","category":"type"},{"location":"references/#Javis.Rotation-Tuple{Any,Any}","page":"References","title":"Javis.Rotation","text":"Rotation(from, to)\n\nRotation as a transition from from to to (in radians) around the origin.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.Rotation-Tuple{Union{Float64, Symbol},Union{Luxor.Point, Symbol}}","page":"References","title":"Javis.Rotation","text":"Rotation(r::Union{Float64, Symbol}, center::Union{Point, Symbol})\n\nRotation as a transition from r to itself around center. Can be used as a general non-animating rotation around a point.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.Rotation-Tuple{Union{Float64, Symbol}}","page":"References","title":"Javis.Rotation","text":"Rotation(r::Union{Float64, Symbol})\n\nRotation as a transition from 0.0 to r . Can be used as a short-hand.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.Transformation","page":"References","title":"Javis.Transformation","text":"Transformation\n\nDefines a transformation which can be returned by an action to be accessible later.  See the circ function inside the javis as an example.  It can be accessed by another [Action])(@ref) using the symbol notation like :red_ball in the example.\n\nFields\n\np::Point: the translation part of the transformation\nangle::Float64: the angle component of the transformation (in radians)\n\n\n\n\n\n","category":"type"},{"location":"references/#Javis.Translation","page":"References","title":"Javis.Translation","text":"Translation <: Transition\n\nStores the Point or a link for the start and end position of the translation\n\nFields\n\nfrom::Union{Point, Symbol}: The start position or a link to the start position. See :red_ball in javis  to::Union{Point, Symbol}: The end position or a link to the end position\n\n\n\n\n\n","category":"type"},{"location":"references/#Javis.Translation-Tuple{Real,Real}","page":"References","title":"Javis.Translation","text":"Translation(x::Real, y::Real)\n\nCreate a Translation(O, Point(x,y)) such that a translation is done from the origin. Shorthand for writing Translation(Point(x,y)).\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.Translation-Tuple{Union{Luxor.Point, Symbol}}","page":"References","title":"Javis.Translation","text":"Translation(p::Union{Point, Symbol})\n\nCreate a Translation(O, p) such that a translation is done from the origin.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.Video","page":"References","title":"Javis.Video","text":"Video\n\nDefines the video canvas for an animation.\n\nFields\n\nwidth::Int the width in pixel\nheight::Int the height in pixel\ndefs::Dict{Symbol, Any} Some definitions which should be accessible throughout the video.\n\n\n\n\n\n","category":"type"},{"location":"references/#Javis.Video-Tuple{Any,Any}","page":"References","title":"Javis.Video","text":"Video(width, height)\n\nCreate a video with a certain width and height in pixel.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.BackgroundAction-Tuple{Any,Function,Vararg{Any,N} where N}","page":"References","title":"Javis.BackgroundAction","text":"BackgroundAction(frames, func::Function, args...; kwargs...)\n\nCreate an Action where in_global_layer is set to true such that i.e the specified color in the background is applied globally (basically a new default)\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_grid-Tuple{}","page":"References","title":"Javis.draw_grid","text":"draw_grid(video::Video, action::Action, frame::Int; direction::AbstractString = \"TR\", line_gap = 25)\n\nDraws an oriented grid on the given frame of a Video. A closure for the _draw_grid internal function.\n\nArguments\n\ndirection::AbstractString: Where grid animation finishes. Default: \"TR\" Available Orientations:\n\"TR\" - Animation finishes in the Top Right corner of the frame.\n\"TL\" - Animation finishes in the Top Left corner of the frame.\n\"BR\" - Animation finishes in the Bottom Right corner of the frame.\n\"BL\" - Animation finishes in the Bottom Left corner of the frame.\nline_gap: How many pixels between each line. Default: 25\n\nExample\n\nExample call of this function within an Action.\n\n...\n Action(1:100, :line, draw_grid(direction = \"TL\", line_gap = 25))\n...\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.javis-Union{Tuple{AT}, Tuple{Video,Array{AT,1}}} where AT<:Javis.ActionType","page":"References","title":"Javis.javis","text":"javis(\n    video::Video,\n    actions::Vector{ActionType};\n    creategif=false,\n    framerate=30,\n    pathname=\"\",\n    tempdirectory=\"\",\n    usenewffmpeg=true\n)\n\nSimilar to animate in Luxor with a slightly different structure. Instead of using actions and a video instead of scenes in a movie.\n\nArguments\n\nvideo::Video: The video which defines the dimensions of the output\nactions::Vector{Action}: All actions that are performed\n\nKeywords\n\ncreategif::Bool: defines whether the images should be rendered to a gif\nframerate::Int: The frame rate of the video\npathname::String: The path for the gif if creategif = true\ntempdirectory::String: The folder where each frame is stored \ndeletetemp::Bool: If true and creategif is true => tempdirectory is emptied after the gif is created\n\nExample\n\nfunction ground(args...) \n    background(\"white\")\n    sethue(\"black\")\nend\n\nfunction circ(p=O, color=\"black\")\n    sethue(color)\n    circle(p, 25, :fill)\n    return Transformation(p, 0.0)\nend\n\nfrom = Point(-200, -200)\nto = Point(-20, -130)\np1 = Point(0,-100)\np2 = Point(0,-50)\nfrom_rot = 0.0\nto_rot = 2π\n\ndemo = Video(500, 500)\njavis(demo, [\n    Action(1:100, ground),\n    Action(1:100, :red_ball, (args...)->circ(p1, \"red\"), Rotation(from_rot, to_rot)),\n    Action(1:100, (args...)->circ(p2, \"blue\"), Rotation(to_rot, from_rot, :red_ball))\n], tempdirectory=\"images\", creategif=true, pathname=\"rotating.gif\")\n\nThis structure makes it possible to refer to positions of previous actions i.e :red_ball is an id for the position or the red ball which can be used in the Rotation of the next ball.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.latex-Tuple{LaTeXStrings.LaTeXString,Real,Symbol}","page":"References","title":"Javis.latex","text":"latex(text::LaTeXString, font_size::Real, action::Symbol)\n\nAdd the latex string text to the top left corner of the LaTeX path. Can be added to Luxor.jl graphics such as Video or Drawing.\n\nNOTE: This only works if tex2svg is installed. It can be installed using the following command (you may have to prefix this command with sudo depending on your installation):\n\nnpm install -g mathjax-node-cli\n\nArguments\n\ntext::LaTeXString: a LaTeX string to render.\nfont_size::Real: integer font size of LaTeX string. Default 10.\naction::Symbol: graphics actions defined by Luxor.jl. Default :stroke. Available actions:\n:fill - See Luxor.fillpath.\n:stroke - See Luxor.strokepath.\n:clip - See Luxor.clip.\n:fillstroke - See Luxor.fillstroke.\n:fillpreserve - See Luxor.fillpreserve.\n:strokepreserve - See Luxor.strokepreserve.\n:none - Does nothing.\n:path - See Luxor docs for polygons.md\n\nThrows\n\nIOError: mathjax-node-cli is not installed\n\nExample\n\nusing Luxor\nusing Javis\nusing LaTeXStrings\n\nmy_drawing = Drawing(400, 200, \"test.png\")\nbackground(\"white\")\nsethue(\"black\")\nlatex(L\"\\sum \\phi\", 100)\nfinish()\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.morph-Tuple{Function,Function}","page":"References","title":"Javis.morph","text":"morph(from_func::Function, to_func::Function)\n\nA closure for the morph_internal function. This makes it easier to write the function inside an Action.\n\nCurrently morphing is quite simple and only works for basic shapes. It especially does not work with functions which produce more than one polygon or which produce filled polygons.  Blending between fills of polygons is definitely coming at a later stage. \n\nImportant: The functions itself should not draw the polygon i.e. use circle(Point(100,100), 50) instead of circle(Point(100,100), 50, :stroke)\n\nArguments\n\nfrom_func::Function: The function that creates the path for the first polygon. \nto_func::Function: Same as from_func but it defines the \"result\" polygon,                      which will be displayed at the end of the Action\n\nExample\n\nThis creates a star that morphs into a circle and back.\n\nusing Luxor\nusing Javis\n\nastar(args...) = star(O, 50) \nacirc(args...) = circle(Point(100,100), 50) \n\nvideo = Video(500, 500)\njavis(video, [\n    Action(1:100, ground),\n    Action(1:50, morph(astar, acirc)),\n    Action(51:100, morph(acirc, astar))\n], creategif=true, tempdirectory=\"images\", \n    pathname=\"star2circle.gif\", deletetemp=true)\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.projection-Tuple{Luxor.Point,Line}","page":"References","title":"Javis.projection","text":"projection(p::Point, l::Line)\n\nReturn the projection of a point to a line.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.zero_lines-Tuple{}","page":"References","title":"Javis.zero_lines","text":"zero_lines(video::Video, action::Action, frame::Int; direction::AbstractString = \"TR\", line_thickness = 10)\n\nDraws zero lines on the given frame of a Video. A closure for the _zero_lines internal function.\n\nArguments\n\ndirection::AbstractString: Direction for how vertical and horizontal axes are drawn. Default: \"TR\" Available Orientations:\n\"TR\" - Vertical axis drawn towards the Top and horizontal axis drawn to the Right of the frame.\n\"TL\" - Vertical axis drawn towards the Top and horizontal axis drawn to the Left of the frame.\n\"BR\" - Vertical axis drawn towards the Bottom and horizontal axis drawn to the Right of the frame.\n\"BL\" - Vertical axis drawn towards the Bottom and horizontal axis drawn to the Left of the frame.\nline_thickness: Defines the thickness of the zero lines. Default: 10\n\nExample\n\nThis example will produce an animation with the vertical axis being drawn towards the top and the horizontal axis being drawn towards the left. One will need to define their own path for tempdirectory and pathname.\n\n...\n Action(1:100, :line, zero_lines(direction = \"TL\", line_thickness = 10)),\n...\n\n\n\n\n\n","category":"method"},{"location":"references/#Private-functions","page":"References","title":"Private functions","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"Modules = [Javis]\nPublic = false","category":"page"},{"location":"references/#Base.:*-Tuple{Array{Float64,2},Transformation}","page":"References","title":"Base.:*","text":"Base.:*(m::Array{Float64,2}, transformation::Transformation)\n\nConvert the transformation to a matrix and multiplies m*trans_matrix. Return a new Transformation\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.compute_transformation!-Tuple{Javis.ActionType,Video,Int64}","page":"References","title":"Javis.compute_transformation!","text":"compute_transformation!(action::ActionType, video::Video, frame::Int)\n\nUpdate action.internal_transitions for the current frame number\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.compute_transition!-Tuple{Javis.InternalRotation,Rotation,Any,Javis.ActionType,Any}","page":"References","title":"Javis.compute_transition!","text":"compute_transition!(internal_rotation::InternalRotation, rotation::Rotation, video, action::ActionType, frame)\n\nComputes the rotation transformation for the action. If the Rotation is given directly it uses the frame number for interpolation. If rotation includes symbols the current definition of that look up is used for computation.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.compute_transition!-Tuple{Javis.InternalTranslation,Translation,Any,Javis.ActionType,Any}","page":"References","title":"Javis.compute_transition!","text":"compute_transition!(internal_translation::InternalTranslation, translation::Translation, video, action::ActionType, frame)\n\nComputes the translation transformation for the action. If the translation is given directly it uses the frame number for interpolation. If translation includes symbols the current definition of that look up is used for computation.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_obj-Tuple{Val{:g},Any,Any}","page":"References","title":"Javis.draw_obj","text":"draw_obj(::Val{:g}, o, defs)\n\nDraws a group by setting the attributes (like transformations)  and then calls draw_obj for all child elements.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_obj-Tuple{Val{:path},Any,Any}","page":"References","title":"Javis.draw_obj","text":"draw_obj(::Val{:path}, o, defs)\n\nCalls the commands specified in the path data.  Currently supports only a subset of possible SVG commands.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_obj-Tuple{Val{:rect},Any,Any}","page":"References","title":"Javis.draw_obj","text":"draw_obj(::Val{:rect}, o, defs)\n\nDraw the rectangle defined by the object o.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_obj-Tuple{Val{:use},Any,Any}","page":"References","title":"Javis.draw_obj","text":"draw_obj(::Val{:use}, o, defs)\n\nCalls the command specified in defs.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.float_attribute-Tuple{LightXML.XMLElement,Any}","page":"References","title":"Javis.float_attribute","text":"float_attribute(o, name)\n\nGet the attribute name of the XMLElement and parse it as a Float64\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.match_num_point!-Tuple{Array{Luxor.Point,1},Array{Luxor.Point,1}}","page":"References","title":"Javis.match_num_point!","text":"match_num_point!(poly_1::Vector{Point}, poly_2::Vector{Point})\n\nThis is a helper function for morph.  Given two polygons poly_1 and poly_2 points are added to the polygon with less points  until both polygons have the same number of points.  The polygon with less points gets mutated during this process.\n\nArguments\n\npoly_1::Vector{Point}: The points which define the first polygon\npoly_2::Vector{Point}: The points which define the second polygon\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.morph_internal-Tuple{Video,Action,Any,Function,Function}","page":"References","title":"Javis.morph_internal","text":"morph_internal(video::Video, action::Action, frame, from_func::Function, to_func::Function)\n\nInternal version of morph but described there.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.path_move-Tuple{Any,Any}","page":"References","title":"Javis.path_move","text":"path_move(x,y)\n\nMoving to the specified point\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.path_quadratic-Tuple{Luxor.Point,Any,Any,Any,Any}","page":"References","title":"Javis.path_quadratic","text":"path_quadratic(c_pt::Point, x,y, xe, ye)\n\nDrawing a quadratic bezier curve by computing a cubic one as that is supported by Luxor\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.pathsvg","page":"References","title":"Javis.pathsvg","text":"pathsvg(svg, fontsize=10)\n\nConvert an svg to a path using Luxor. Normally called via the latex command. It handles only a subset of the full power of svg.\n\n\n\n\n\n","category":"function"},{"location":"references/#Javis.perform_action-NTuple{4,Any}","page":"References","title":"Javis.perform_action","text":"perform_action(action, video, frame, origin_matrix)\n\nIs called inside the javis and does everything handled for an ActionType. It is a 4-step process:\n\ncompute the transformation for this action (translation, rotation, scale)\ndo the transformation\ncall the action function\nsave the result of the action if wanted inside video.defs\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.perform_transformation-Tuple{Javis.ActionType}","page":"References","title":"Javis.perform_transformation","text":"perform_transformation(action::ActionType)\n\nPerform the transformations as described in action.internal_transitions\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.perform_transformation-Tuple{Javis.InternalRotation}","page":"References","title":"Javis.perform_transformation","text":"perform_transformation(trans::InternalRotation)\n\nTranslate and rotate as described in trans.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.perform_transformation-Tuple{Javis.InternalTranslation}","page":"References","title":"Javis.perform_transformation","text":"perform_transformation(trans::InternalTranslation)\n\nTranslate as described in trans.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.save_morph_polygons!-Tuple{Action,Function,Function}","page":"References","title":"Javis.save_morph_polygons!","text":"save_morph_polygons!(action::Action, from_func::Function, to_func::Function)\n\nConverts the paths created by the functions to polygons and calls match_num_point! such that both polygons have the same number of points. This is done once inside morph_internal. Saves the two polygons inside action.opts[:from_poly] and action.opts[:to_poly].\n\nAssumption: Both functions create only a single polygon each.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.set_attr-Tuple{Val{:transform},Any}","page":"References","title":"Javis.set_attr","text":"set_attr(::Val{:transform}, transform_str)\n\nCall the corresponding set_transform method i.e matrix, scale and translate\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.set_attrs-Tuple{Any}","page":"References","title":"Javis.set_attrs","text":"set_attrs(o)\n\nSetting the attributes of the object o by calling set_attr methods.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.set_transform-Tuple{Val{:matrix},Vararg{Any,N} where N}","page":"References","title":"Javis.set_transform","text":"set_transform(::Val{:matrix}, args...)\n\nMultiply the new matrix with the current matrix and set it.\n\n\n\n\n\n","category":"method"},{"location":"#Javis","page":"Home","title":"Javis","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Javis.jl (Julia mAthematical VISualization) is a visualization and animation package that builds on top of Luxor.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"The overall goal is to make it simple to create mathematical animations. ","category":"page"}]
}
