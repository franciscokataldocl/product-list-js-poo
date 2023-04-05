//DOM ELEMENTS
const submitForm = document.getElementById('product-form');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const yearInput = document.getElementById('year');
const productList = document.getElementById('product-list');
// const deleteButton = document.getElementById('delete')




class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class Ui {
  addProduct(product) {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="card text-center mb-4 py-2 animate__animated animate__fadeInUp">
        <div class="row">
            <div class="col-md-8">
            <div class="card-body">
        <strong class="d-inline product-title text-info">Product: <span class="text-muted">${product.name}</span></strong> |
        <strong class="d-inline product-title text-info">Price: <span class="text-muted">${product.price}</span></strong> |
        <strong class="d-inline product-title text-info">year: <span class="text-muted">${product.year}</span></strong>
        </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center align-items-center">
            <button class="btn btn-outline-danger" id="delete" name="delete" >
                <i class="fa-solid fa-trash delete-icon" ></i>
            </button>
            </div>
        </div>
    </div>
    `;
    productList.appendChild(element);
  }

  resetForm(){
    submitForm.reset();
  }
  deleteProduct(element) {
 
    if(element.name === 'delete'){
        const elementToRemove = element.parentElement.parentElement.parentElement;
        elementToRemove.remove();
        this.deleteMessage();
    }
  }

  deleteMessage() {
    Swal.fire({
        title: 'Success!',
        text: 'Product removed successfully',
        icon: 'success',
        timer: 2000,
        showCancelButton: false, // There won't be any cancel button
        showConfirmButton: false // There won't be any confirm button
      })
  }

  addMessage() {
    Swal.fire({
        title: 'Success!',
        text: 'Product added successfully',
        icon: 'success',
        timer: 2000,
        showCancelButton: false, // There won't be any cancel button
        showConfirmButton: false // There won't be any confirm button
      })
  }
}



//DOM EVENTS

submitForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = nameInput.value;
    const price = Number(priceInput.value);
    const year = Number(yearInput.value);
    
    const product = new Product(name, price, year);
    new Ui().addProduct(product);
    new Ui().addMessage();
    new Ui().resetForm();

});

productList.addEventListener('click', function(e){
    const ui = new Ui().deleteProduct(e.target);
})
