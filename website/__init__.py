from flask import Flask, render_template, url_for, request

app = Flask(__name__)
app.config["SECRET_KEY"] = "uW0E1RzbJCYg0@M#*42i5yvp%" #to protect from cross site request

@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html", title="Home")

@app.route('/services')
def services():
    return render_template("services.html", title="Dienstleistungen")


@app.route('/references')
def references():
    return render_template("references.html", title="Referenzen")

#@app.route('/about_us')
#def about_us():
#    return render_template("about_us.html", title="Über Uns")

@app.route('/gdpr')
def gdpr():
    return render_template("gdpr.html", title="Datenschutz")

@app.route('/impressum')
def impressum():
    return render_template("impressum.html", title="Impressum")

@app.route('/jobs')
def jobs():
    return render_template("jobs.html", title="Jobs")

if __name__=="__main__":
    # if run from python it goes in debug mode
    app.run(debug=True)
