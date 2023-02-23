function generatehtml(teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
    <div>
        <header>
          <h1>My Team</h1>
        </header>
    ${teamMembers.map(employee => {
      return `
        <div>
          <h2>${employee.name}</h2>
          <h3>${employee.getRole()}</h3>
            <div>
              <p>ID: ${employee.id}</p>
              <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
              ${employee.getExtraInfo()}
            </div>
          </div>
      `
    }).join("") }
    </div>
    </body>
    </html>`


  }







module.exports = generatehtml
