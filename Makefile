build:
	jade src/jades --out public
	lessc src/stylesheets/styles.less public/styles.css
