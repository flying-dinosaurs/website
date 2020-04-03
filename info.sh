################
# Requierments #
################
pip install flask Flask-Mail wtforms flask_wtf

#################
# run flask app #
#################
#2 options available:

#1) run it with shell, have to set environmet variables every time the shell is closed
## -> set environment variable:
### linux/mac
export FLASK_APP=website.py
export FLASK_DEBUG=1 # debug mode so we dont have to restart webserver after every change
### windows
use "set" instead of "export"
# then:
run flask


#2) run it through python
python3 website.py
## have to add
if __name__=="__main__":
   app.run(debug=True)
