import { createGlobalStyle } from "styled-components";

 export const LightTheme = {
   body:'#eee',
   fontColor:"#000",
   text:'#23374D',
   toogle:'#757575',
   button:'#23374D',
   itemBgc:'#FFFFFF'
};

 export const DarkTheme = {
    body:'#000D20',
    fontColor:'#fff',
    text:'#eee',
   toogle:'#0085FF',
   button:'#0085FF',
   itemBgc:'#080808',
   cardBgc:'#110F0E'
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

  h1{
   color: ${(props)=> props.theme.text};
  }

  

#tituloSlider{
   color: ${(props)=> props.theme.text};
}

.producto{
   background-color: ${(props)=> props.theme.itemBgc};
}

.producto-footer p {
   color: ${(props)=> props.theme.text};
}

.producto-footer h1{
   color: ${(props)=> props.theme.text};
}

.price p{
   
      color: ${(props)=> props.theme.text};
   
}

.box h2{
   color: ${(props)=> props.theme.text};
}

.box p{
   color: ${(props)=> props.theme.text};
}

.precio{
   color: ${(props)=> props.theme.text};
}

.items{
   color: ${(props)=> props.theme.text};

}

h4{
   color: ${(props)=> props.theme.text};

}


.tituloCart{
   color: ${(props)=> props.theme.text};

}

.light{
   font-size:1.7rem;
   padding:0.6rem;
   font-weight:700;
}


.dark{
   font-size:1.7rem;
   padding:0.6rem;
   font-weight:700;
}



#card-bgc{
   background-color: ${(props)=> props.theme.cardBgc};
}



`  ;




