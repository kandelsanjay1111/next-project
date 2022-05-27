import React from 'react'

export default function contact() {
  async function handleSubmit(event){
    event.preventDefault();
    const data={
      name:event.target.first.value,
      last:event.target.last.value
    }

    const jsonData=JSON.stringify(data);

    const endpoint="http://localhost:3000/api/getcontact";

    const options={
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body:jsonData,
    }

    const response=await fetch(endpoint, options);

    const result=await response.json();

    // alert(result);
    console.log(result);
  }
  return (
    <div>
    <form onSubmit={handleSubmit} action="http://localhost:3000/api/getcontact" method="post">
      <label htmlFor="first">First name:</label>
      <input type="text" id="first" name="first" />
      <label htmlFor="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
