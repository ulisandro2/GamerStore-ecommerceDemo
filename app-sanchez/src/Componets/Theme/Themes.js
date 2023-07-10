import { createGlobalStyle } from "styled-components";

 export const LightTheme = {
   body:'#eee',
   fontColor:"#000",
   text:'#000000 ',
   toogle:'#757575',
   button:'#23374D',
   svgIcon:'#2342F0',
   bgcCart:'#eee'
   
};

 export const DarkTheme = {
    body:'#0B0A0B',
    fontColor:'#fff',
    text:'#FFFFFF',
   toogle:'#0085FF',
   button:'#0085FF',
   cardBgc:'#110F0E',
   cat:'#1C1C1C',
   svgIcon:'#FFFFFF',
   cards:'#000',
   cardPrice:'#FFF',
   btn:'#7F37C9',
   category:'#050404',
   btndrop:'#fff',
   bgcCart:'#000'

};


const Themes = {
   light: LightTheme,
   dark: DarkTheme
}

export default Themes

export const GlobalStyles = createGlobalStyle`   

  body{
    background-color: ${(props)=> props.theme.body};
  }
 ${'' /* Card */}
 .text-card{
   color:${(props)=> props.theme.text} ;
 }

 .card-title{
   color:${(props)=> props.theme.text} ;
 }
  
 #card-bgc{
   background-color: ${(props)=> props.theme.cardBgc};
}

${'' /* Categories */}

.title-categories{
   color:${(props)=> props.theme.text} ;
   padding: 10px;
}

.cat{
   background-color: ${(props)=> props.theme.cat};
}

.svg-icon svg{
   color: ${(props)=> props.theme.svgIcon};
}

${'' /* About  */}

.titleAbout{
   color:${(props)=> props.theme.text}
}

.text-p{
   color:${(props)=> props.theme.text}
}

.title2{
   color:${(props)=> props.theme.text}
}

.titleAbout{
   color:${(props)=> props.theme.text}
}

.accordion-item:first-of-type .accordion-button{
   background-color: ${(props)=> props.theme.cardBgc};
   color:${(props)=> props.theme.text}
}

.accordion-body{
   background-color: ${(props)=> props.theme.cardBgc};
   color:${(props)=> props.theme.text}
}

.accordion-button{
   background-color: ${(props)=> props.theme.cardBgc};
   color:${(props)=> props.theme.text}
}

.accordion-button:focus{
   background-color: ${(props)=> props.theme.cardBgc};
   color:${(props)=> props.theme.text}
}


.titleSlider{
   color:${(props)=> props.theme.text}
}


.card{
   background-color:${(props)=>props.theme.cards};
}

.card-price{
   color:${(props)=> props.theme.cardPrice}
}

.card-body button{
   background-color:${(props)=> props.theme.btn}
}


.Dropdown .dropdown-btn{
   background-color: ${(props)=> props.theme.cards};
   color:${(props)=> props.theme.btndrop} ;
}

.Dropdown .dropdown-content{
   background:${(props)=> props.theme.category}
}

.big-img img{
   background-color: ${(props)=> props.theme.body}
}

.box .row h2{
   color:${(props)=> props.theme.text}
}

.box p{
   color:${(props)=> props.theme.text}
}

.bqrihX .tituloContador{
   color:${(props)=> props.theme.text}
}

.titulo-carrito{
   color:${(props)=> props.theme.text};
   padding-left: 40px;
}

.cartItem{
   background-color:${(props)=> props.theme.bgcCart}
}

.product-name{
   color:${(props)=> props.theme.text};
}

.count .count-title{
   color:${(props)=> props.theme.text};
}


.subtotal{
   color:${(props)=> props.theme.text};
   padding:10px 50px 10px 70px;
}

.delete{
   background-color: black;
      color: white;
      width: 120px;
      border: none;
      margin: 0.7rem;
      height: 55px;
      font-weight: 700;
      border-radius: 7px;
}

.total{
   color:${(props)=> props.theme.text};
   padding:10px 50px 10px 70px;
}

.shopping{
   background-color: black;
      color: white;
      width: 120px;
      border: none;
      margin: 0.7rem;
      height: 55px;
      font-weight: 700;
      border-radius: 7px;
}

.checkout{
   background-color: black;
      color: white;
      width: 120px;
      border: none;
      margin: 0.7rem;
      height: 55px;
      font-weight: 700;
      border-radius: 7px;
}

.delete:hover{
      background: rgba(0,0,0,0.75);

    }
    .shopping:hover{
      background: rgba(0,0,0,0.75);

    }
    .checkout:hover{
      background: rgba(0,0,0,0.75);

    }



`  ;




