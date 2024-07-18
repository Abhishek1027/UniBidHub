from flask import Flask, render_template, jsonify, request, redirect, url_for
from werkzeug.utils import secure_filename
import os
from views import views

app = Flask(__name__)

# Register the blueprint
app.register_blueprint(views)

# Directory where uploaded images will be saved
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# A simple in-memory storage for submitted product details by category
products = {
    'laptop': [],
    'mobileCharger': [],
    'powerBank': [],
    'phone': [],
    'headphone': [],
    'watches': []
}

@app.route('/')
def index():
    return render_template('submit1.html')

@app.route('/submit1', methods=['POST'])
def submit():
    name = request.form['name']
    number = request.form['number']
    category = request.form['category']
    mrp = request.form['mrp']
    description = request.form['description']
    image = request.files['image']
    
    filename = None
    if image:
        filename = secure_filename(image.filename)
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    product = {
        'name': name,
        'number': number,
        'mrp': mrp,
        'description': description,
        'image': filename
    }
    products[category].append(product)

    return jsonify(success=True)

@app.route('/category/<category_name>')
def show_category(category_name):
    if category_name not in products:
        return "Category not found", 404
    return render_template('category.html', category_name=category_name, items=products[category_name])

if __name__ == '__main__':
    app.run(debug=True)
