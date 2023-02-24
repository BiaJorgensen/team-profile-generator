// Function to create HTML using teamMembers information
function generatehtml(teamMembers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link to Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <!-- Link to CSS file -->
    <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>

    <body>
      <header class="mb-4 p-3 text-center">
        <h1>My Team</h1>
      </header>

      <div class="container d-flex justify-content-center">
        <div class="row">
          ${teamMembers.map(employee => {
          return `
          <div class="col-md-4 ">
            <div class="card my-3">
              <div class="card-header">
                <h2>${employee.name}</h2>
                <h3>${employee.getRole()}</h3>
              </div>
              <div class="card-body bg-light">
                <p>ID: ${employee.id}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                ${employee.getExtraInfo()}
              </div>
            </div>
          </div>
          `
          }).join("") }
        </div>
      </div>
    </body>
  </html>`
 }

module.exports = generatehtml
