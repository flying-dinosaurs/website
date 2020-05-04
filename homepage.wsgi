#!/bin/env python3

activate_this = '/srv/http/homepage/env/bin/activate_this.py'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__= activate_this))

import sys
sys.path.insert(0, "/srv/http/homepage/")

from website import app as application
application.secret_key = 'e7aa3f7a8556fb6de845d51a'
