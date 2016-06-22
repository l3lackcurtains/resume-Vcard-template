# Sass configuration file.
#============================================================
# 1. Your wordpress theme development workspace directory.
http_path = "/"

# 2. configuration for our theme elements directory
css_dir = "." #targets to style.css file at the root level of theme
sass_dir = "assests/scss" #targets ass directory
images_dir = "images" #targets image directory
javascripts_dir = "assests/js" #targets JavaScript directory

environment = :development
relative_assets = true
line_comments   = false # [true] value shows number of line of scss code generated from.

output_style = :compact # :nested, :expanded, :compact, or :compressed

# probably don't need to touch this
preferred_syntax = :scss