class Navigation extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <div class="nav">
				<ul>
					<li>
						<a href="index.html">Home</a>
					</li>
					<li>
						<a href="damir-portfolio-projects.html">Projects</a>
					</li>
					<li>
						<a href="damir-portfolio-diagrams.html">Database Diagrams</a>
					</li>
					<li>
						<a href="damir-portfolio-api-unit-tests.html">API Unit Tests</a>
					</li>
					<li>
						<a href="damir-portfolio-resume.html">Resume</a>
					</li>
					<li>
						<a href="damir-portfolio-about.html">About</a>
					</li>
				</ul>
			</div>
			`;
	}
}

customElements.define("nav-component", Navigation);
