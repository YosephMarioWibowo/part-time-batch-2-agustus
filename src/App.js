import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductItem from './components/ProductItem';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Asep Agus Heri Hermawan',
    price: 'he who did not taste the bitterness of learning, will suffer the humiliation of ignorance for the rest of his life.',
    picture: 'https://drive.google.com/file/d/1IWrWCn6yiVXLFuuvxHb-LhX2DOYki7FZ/view?usp=sharing',
    github: 'https://github.com/asep10001'
  },
  {
    id: 2,
    name: 'Dian Prasetyo',
    price: 'Sabar, ikhlas, Bersyukur',
    picture: 'https://drive.google.com/file/d/1rZrrKjLbZ4WSSFGERo_9M1joxAtPeIjS/view?usp=sharing',
    github: 'https://github.com/dianprsty'
  },
  {
    id: 3,
    name: 'Shirleen Adriana',
    price: 'Mengajar adalah cara terbaik untuk belajar',
    picture: 'https://drive.google.com/file/d/15P9w6YRYaD_sU_OP98Z4i26qcyGenUcf/view?usp=sharing',
    github: 'https://github.com/shirahub'
  },
  {
    id: 4,
    name: 'Pramadhio Ari Putro',
    price: 'Khawatir adalah penyalahgunaan sebuah imajinasi',
    picture: 'https://1drv.ms/u/s!Av2qSitiiKYAjlvZW4LXw9N18geCg',
    github: 'https://github.com/dhioputro'
  },
  {
    id: 5,
    name: 'Rifki Harbi Awali',
    price: 'Basthotan Fil Ilmi Wal Jismi',
    picture: 'https://drive.google.com/file/d/1HvhdRr6nRPoEqcKz4y2xTSXuRHLWMqYU/view?usp=drivesdk',
    github: 'https://github.com/rifkiharbiawali'
  },

]


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

});


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: sessionStorage.getItem('products')!=='[]' && sessionStorage.getItem('products')!==null?JSON.parse(sessionStorage.getItem('products')):products,
      name:'',
      price: ''
    }

    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);  
    this.editProduct = this.editProduct.bind(this);

  }

  componentWillMount(){
    const products = this.getProducts();
    this.setState({
      products: products 
    });
    console.log(this.state);
  }

  componentDidUpdate(){
    sessionStorage.setItem('products', JSON.stringify(this.state.products));
  }

  getProducts(){
    return this.state.products;   
  }

  deleteProduct(id){     
    let newProducts = [...this.state.products];    
    newProducts = newProducts.filter(product=>{
      return product.id !== id;
    });
   

    this.setState({
      products: newProducts
    });
  }

  addProduct(e){
    e.preventDefault();    
   
   const newProduct = {
      id: Date.now(),
      name: this.state.name,
      price: this.state.price
    };     
   

    this.setState({
      products: [...this.state.products, newProduct],
      name: '',
      price: ''
    });
    
  }


  editProduct(name, price, prevID){    
    let newProducts = [...this.state.products];    
    
    newProducts = newProducts.map((product)=>{
      if(product.id===prevID){
        product.name = name;
        product.price = price;
      }
      return product;
    });

    this.setState({ 
      products: newProducts
     });

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };




  render() {      
  // console.log(this.props.match);

    const { classes } = this.props;
    return (
      
      <div className="CRUD">
        
      
     

        <h1>G2 Academy Student</h1>
        <div>
          <form>
            <TextField
              id="name"
              label="Name"        
              margin="normal"
              value={this.state.name}       
              onChange={this.handleChange('name')}  
              className={classes.textField}
              inputRef={input=>this.inputName=input}

            />
            <TextField
              id="price"
              label="Motto"        
              margin="normal"
              value={this.state.price}       
              onChange={this.handleChange('price')}  
              className={classes.textField}
            />
            <Button size="small" variant="raised" color="primary" className={classes.button} onClick={this.addProduct}>Add</Button>  
           
          </form>
        </div>
  

        <ul>
        {
          this.state.products.map(product => {
            return (                         
              <ProductItem key={product.id}
                onDelete={this.deleteProduct} 
                onEdit={this.editProduct}
                {...product}
              />
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(App));