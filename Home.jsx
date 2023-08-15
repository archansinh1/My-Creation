import React from "react";
import './App.css';

const Home = () =>
{
    return(
        <div>

		<div class="wrapper">
			
			<div class="header">Programming Languages</div>
			<div class="cards_wrap">
				
				<div class="card_item">
					<div class="card_inner">
						<img src="clg.png"/>
						{/* <img url="clg.png"/> */}
						<div class="role_name">C Language</div>
						<div class="real_name">Dennis Ritchie</div>
						<div class="film">C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs.</div>
						<a href="https://www.w3schools.com/c/index.php">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="cpp.png"/>
						<div class="role_name">C++</div>
						<div class="real_name">Bjarne Stroustrup</div>
						<div class="film">C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".</div>
						<a href="https://www.w3schools.com/cpp/cpp_intro.asp">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="htm.png"/>
						<div class="role_name">HTML</div>
						<div class="real_name">Tim Berners-Lee</div>
						<div class="film">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</div>
						<a href="https://www.w3schools.com/html/default.asp">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="cs.png"/>
						<div class="role_name">CSS</div>
						<div class="real_name">Hakon Wium Lie</div>
						<div class="film">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</div>
						<a href="https://www.w3schools.com/css/default.asp">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="javas.png"/>
						<div class="role_name">Java Script</div>
						<div class="real_name">Brendan Eich</div>
						<div class="film">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</div>
						<a href="https://www.w3schools.com/js/default.asp">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="rjs.png"/>
						<div class="role_name">React.js</div>
						<div class="real_name">Jordan Walke</div>
						<div class="film">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</div>
						<a href="https://www.w3schools.com/REACT/DEFAULT.ASP">READ MORE</a>
					</div>
				</div>

				<div class="card_item">
					<div class="card_inner">
						<img src="python.png"/>
						<div class="role_name">PYTHON</div>
						<div class="real_name">Guido Van Rossum</div>
						<div class="film">Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.</div>
						<a href="https://www.w3schools.com/python/">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="Angular.png"/>
						<div class="role_name">ANGULAR.JS</div>
						<div class="real_name">Miško Hevery</div>
						<div class="film">AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and corporations.</div>
						<a href="https://www.w3schools.com/angular/">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="node.png"/>
						<div class="role_name">NODE.JS</div>
						<div class="real_name">Ryan Dahl</div>
						<div class="film">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</div>
						<a href="https://www.w3schools.com/nodejs/">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="mdb.png"/>
						<div class="role_name">MongoDB</div>
						<div class="real_name">Dev Ittycheria</div>
						<div class="film">MongoDB, Inc. is an American software company that develops and provides commercial support for the source-available database MongoDB, a NoSQL database that stores data in JSON-like documents with flexible schemas.</div>
						<a href="https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="javaa.png"/>
						<div class="role_name">JAVA</div>
						<div class="real_name">James Gosling</div>
						<div class="film">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</div>
						<a href="https://www.w3schools.com/java/default.asp">READ MORE</a>
					</div>
				</div>
				<div class="card_item">
					<div class="card_inner">
						<img src="laravell.png"/>
						<div class="role_name">LARAVEL</div>
						<div class="real_name">Taylor Otwell</div>
						<div class="film">Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.</div>
						<a href="https://www.w3schools.in/laravel">READ MORE</a>
					</div>
				</div>

			</div>
		</div>  


        </div>
    )
}

export default Home;