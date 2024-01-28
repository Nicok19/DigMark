import React from "react";
import './OurWorkStyles.css';

const OurProducts = () =>{
return(
<div className="greyBackground">
<div className="definitionOurWork">
<h2>Our work</h2>
<p>We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
</div>

<div className="allBrands">

<div id="productDescription">
<img src="/Elements/apple.png"  alt="Proyecto Apple" />
<h3>Apple</h3>
</div>

<div id="productDescription">
<img src="/Elements/CocaCola.png"  alt="proyecto CocaCola" />
<h3>Coca-Cola</h3>
</div>

<div id="productDescription">
<img src="/Elements/Nike.png"  alt="proyecto CocaCola" />
<h3>Nike</h3>
</div>
</div>


<div className="pals">
<h2>Companies we Work with</h2>
<img src="/Elements/adobe.png"  alt="Adobe Logo" />
<img src="/Elements/amazon.png"  alt="Amazon Logo" />
<img src="/Elements/evernote.png"  alt="Evernote Logo" />
<img src="/Elements/asana.png"  alt="Asana Logo" />
<img src="/Elements/paypal.png"  alt="Paypal Logo" />
<img src="/Elements/spotify.png"  alt="Spotify Logo" />
<img src="/Elements/shopify.png"  alt="Shopify Logo" />
<img src="/Elements/uber.png"   alt="uber Logo" />
<img src="/Elements/microsoft.png"  alt="microsoft Logo" />
<img src="/Elements/google.png"  alt="google Logo" />

</div>
</div>


)

}

export default OurProducts;