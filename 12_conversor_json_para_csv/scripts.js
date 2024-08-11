const converterForm = document.querySelector("#converterForm")
const converterInput = document.querySelector("#converterInput")
const jsonToCsvButton = document.querySelector("#jsonToCsvButton")
const csvToJsonButton = document.querySelector("#csvToJsonButton")


function jsonToCsv(json) {

    const headers = Object.keys(json[0])
    const csvRows = []

    csvRows.push(headers.join(","))

    console.log(csvRows)

    for(const row of json) {
        const values = headers.map((header) => {

            let value = row[header];

            if(value === null || value === undefined) {
                value = ""
            } else if (typeof value === "object"){
                value = JSON.stringify(value)
            }

            return value
        })

        csvRows.push(values.join(","))
    }

    return csvRows.join("\n")
}


jsonToCsvButton.addEventListener("click", function() {
    const json = JSON.parse(converterInput.value.trim());
    const csv = jsonToCsv(json);

    downloadCsv(csv)
})

function downloadCsv(csv){
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute(
        "href",
        "data:text/csv;charset=utf-8," + encodeURIComponent(csv)
    );

    downloadLink.setAttribute("download", "data.csv")

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
}