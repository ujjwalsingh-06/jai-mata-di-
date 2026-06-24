const SUPABASE_URL =
"https://lunvhmvcnkhgjjvzlqza.supabase.co";

const SUPABASE_KEY =
"sb_publishable_qPj504EGuNqJjzS1ofHFRg_fj6tfctq";

const supabase =
window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const form =
document.getElementById("propertyForm");

const message =
document.getElementById("message");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const title =
  document.getElementById("title").value;

  const price =
  document.getElementById("price").value;

  const location =
  document.getElementById("location").value;

  const image =
  document.getElementById("image").value;

  const description =
  document.getElementById("description").value;

  const { error } =
  await supabase
  .from("properties")
  .insert([
    {
      title,
      price,
      location,
      image,
      description
    }
  ]);

  if (error) {
    message.innerText =
    "Error: " + error.message;
  } else {

    message.innerText =
    "Property Added Successfully";

    form.reset();
  }

});
