from flask import Flask, render_template

app = Flask(__name__)
#Crea l'applicazione

@app.route('/')
#@app.route - associa un UrL ad una funzione
#'/' - appresenta la root del sito

def index():
    return render_template('index.html')
    #render_nomeCartella(parametro) - cerca nella cartella indicata
    #il parmetro e rocessa il file restituendo un HTTP



#Main del programma
if __name__ == '__main__':
    app.run(debug=True)
    #debug = true abilita vari funzioni per l'esecuzione del programma