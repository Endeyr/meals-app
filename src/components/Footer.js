const Footer = () => {
	var today = new Date()

	return (
		<footer className="">
			<div className="">
				<div className="">
					<h5>Meals App - {today.getFullYear()}</h5>
					<p>
						By Aaron Thompson. Found at{' '}
						<a href="https://github.com/Endeyr/meals-app" alt="Github">
							Github
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
