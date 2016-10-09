from flask import Flask, render_template
<<<<<<< HEAD

=======
>>>>>>> 029ca4712f14d792851ed591dec1fd987a3bdbdc
app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

<<<<<<< HEAD

=======
>>>>>>> 029ca4712f14d792851ed591dec1fd987a3bdbdc
if __name__ == "__main__":
    app.run()
