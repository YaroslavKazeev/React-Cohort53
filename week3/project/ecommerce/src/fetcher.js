export default async function fetcher(URL, setter) {
  let data = "error";
  try {
    const response = await fetch(URL);
    data = await response.json();
  } catch (error) {
    console.log("Fetch error:", error);
  }
  setter(data);
}
