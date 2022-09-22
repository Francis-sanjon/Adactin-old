const report=require("multiple-cucumber-html-reporter")
report.generate({
    jsonDir:"cypress/Cucumber-json/",
    reportPath:"cypress/Cucumber-json/"
    /*jsonDir: './path-to-your-json-output/',
	reportPath: './path-where-the-report-needs-to-be/',*/
})