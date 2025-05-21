export default function Contact() {
  return (
    <section className="bg-white p-6 shadow rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-600">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 rounded text-gray-600 outline-transparent"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2  rounded text-gray-600 outline-transparent"
        />

        <textarea
          placeholder="Your Message"
          className="w-full p-2  rounded text-gray-600 outline-transparent"
        ></textarea>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 ">
          Send
        </button>
      </form>
    </section>
  );
}
