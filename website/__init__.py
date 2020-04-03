from flask import Flask, render_template, url_for, request
from flask_mail import Mail, Message
from flask_wtf import Form
from wtforms import TextField, TextAreaField, validators, StringField

app = Flask(__name__)
app.config["SECRET_KEY"] = "uW0E1RzbJCYg0@M#*42i5yvp%" #to protect from cross site request

# email settings
app.config['DEBUG'] = True
app.config['TESTING'] = False  # will surpress sending mails if true (overwrites surpress settings)
app.config['MAIL_SERVER'] = "smtp.office365.com"
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True  # trial and error with tls/sll, try all combinations (but always keep min 1 true)
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = "jan.milde@hotmail.de"
app.config['MAIL_PASSWORD'] = "zO544q9uK8Yq"
app.config['MAIL_DEFAULT_SENDER'] = ("Jan from Albatros Coding", "jan.milde@hotmail.de") # name/email
app.config['MAIL_MAX_EMAILS'] = 5 #safety, will not allow to send more than 5 mails at once
#app.config['MAIL_SUPRESS_SEND'] = False
app.config['MAIL_ASCII_ATTACHMENTS'] = False # if email

mail = Mail(app)

class ContactForm(Form):
    name = StringField("Name", validators = [validators.InputRequired()])
    email = StringField("E-mail"
                        , validators = [validators.InputRequired()])
    phone = StringField("Phone")
    message = TextAreaField("Message"
                            ,validators=[validators.InputRequired()])



@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html", title="Home")

@app.route('/services')
def services():
    return render_template("services.html", title="Dienstleistungen")

@app.route('/about_us')
def about_us():
    return render_template("about_us.html", title="Über Uns")

@app.route('/gdpr')
def gdpr():
    return render_template("gdpr.html", title="Datenschutz")

@app.route('/impressum')
def impressum():
    return render_template("impressum.html", title="Impressum")

@app.route('/jobs')
def jobs():
    return render_template("jobs.html", title="Jobs")


@app.route('/contact', methods=["POST","GET"])
def contact():
    info=""
    form = ContactForm()
    if form.validate_on_submit() and request.method == "POST":
        # get information from the form
        subject = "Email from {}".format(request.form.get('contact-name'))
        message ="Name: {}\nE-Mail: {}\nPhone: {}\n\n{}".format(request.form.get('contact-name'),
                                                                request.form.get('contact-mail'),
                                                                request.form.get('contact-phone'),
                                                                request.form.get('contact-message'))
        msg = Message(subject,
                      #sender=("name from Albatros Coding","name@email.com"),
                      recipients=["jan.milde@protonmail.com"])#, "untergasser@posteo.de", "ysmiraak@gmail.com"])

        ### ADD THE EMAIL TEXT
        msg.body = message
        # option to send it either as html or body-> formating possible
        #msg.html = "<b>bold text</b>

        ### ADD ATTACHMENT
        #with app.open_resource("img.jpg") as img:
        ##"image/jpeg" is mimetype and has to be adapted
        #    msg.attach("name.jpg", "image/jpeg", img.read())

        mail.send(msg)
        info = "Message has been sent!"

    return render_template("contact.html", title="Contact", info=info, form=form)




if __name__=="__main__":
    # if run from python it goes in debug mode
    app.run(debug=True)
