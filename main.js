try {
    const dripB = document.getElementsByClassName('dripping-bottom')[0];
    const dripT = document.getElementsByClassName('dripping-top')[0];
    if (dripB && dripT) {
        for (var i = 0; i < 100; i++) {
            var d1 = document.createElement('div');
            var d2 = document.createElement('div');
            dripT.append(d1)
            dripB.append(d2)
        }
    }
} catch (e) {
    console.log("Failed to add dripping effect")
}

const footerEl = document.getElementsByTagName('footer')[0];
footerEl.setAttribute('class', 'container-fluid text-light py-4');
footerEl.innerHTML = `
	
<!-- row 1  -->
<section class="footer">
		<div class="box-container text-center text-md-left">
			<div class="row">
		<div class="box col-md-3 mt-md-0 mt-3">
			<h3>Work With Us</h3>
			<p>Change the world, one scoop at a time. Working at DQ means getting paid to do what you enjoy. 
			We are looking for people who have same vision with us, a great mindset to work smart despite the 
			challenges and aspire significant change among others.</p>
		</div>
		<div class="box col-md-3 mb-md-0 mb-3">
			<h3>Contact Information</h3>
			<p>We are open and glad to serve you starting at 9AM – 9PM central time and Saturday and Sunday. 
			We are happy to assist our clients in any way we can, so please call us at 1-866-793-7582, email us 
			at dairyqueenph@gmail.com</p>
		</div>
		<div class="box col-md-3 mb-md-0 mb-3">
			<div class="social-media">
                <a href="https://www.facebook.com/dairyqueenphilippines/?brand_redir=50504372607" class= "fab fa-facebook-f"></a>
                <a href="https://twitter.com/DairyQueen" class= "fab fa-twitter"></a>
                <a href="https://www.instagram.com/dairyqueen/" class= "fab fa-instagram"></a>
                <a href="https://www.linkedin.com/company/dairy-queen/" class= "divide fab fa-linkedin"></a>
				<a href="https://www.youtube.com/channel/UC3Jb2uyChjXLSJQkjo2dH_g?view_as=subscriber" class= "fab fa-youtube"></a>
                <a href="https://www.pinterest.ph/dairyqueenCA/_saved/" class= "fab fa-pinterest"></a>
            </div>
		</div>
		<div class="box col-md-3 mb-md-0 mb-3">
			<label for="email">Subscribe to our Newsletter</label>
            <input type="email" class="email form-control mb-4" name="email" placeholder="example@email.com">
            <button class="btn btn-success" onclick="alert('Thank you for Subscribing!')">Submit</button>
		</div>
		</div>
		</div>
	</section>

<hr />

<!-- row 2  -->
<div class="row">
    <div class="col-lg brand">
        <img src="images/footer.png">
    </div>
    <div class="col-lg brand">
        <h4>&reg;T.M. AM.D.Q. CORP &copy; 2021 COPYRIGHT <br>
		<nav>
		<a href="https://www.dairyqueen.com/us-en/Privacy-Statement/">Privacy Statement</a> ||
		<a href="https://www.dairyqueen.com/en-us/Visitor-Agreement/">Visitor Agreement</a>
		<nav>
		</h4>
	</div>
    <div class="col-lg">
        <h3 class="text-center">Citations</h3>
        <h5 class="text-center">
            Dairy Queen Philippine. (n.d.) Home [Facebook page]. Facebook. Retrieved from https://www.facebook.com/dairyqueenphilippines
        </h5>
    </div>
    <div class="col-lg">
        <h3 class="text-center">Web Designer</h3>
        <h5 class="text-center"">
            Kyla Marie E. Bajar - BSIT-SMBA <br>
			Christian Jerome Kyle S. Reyes - BSIT-WMA <br> 
			Kyla Marie B. Trinidad - BSIT-SMBA
        </h5>
    </div>
`