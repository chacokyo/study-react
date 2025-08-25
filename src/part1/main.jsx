function Profile() {
  return (
    <img
      src="https://pethelpful.com/.image/w_1920,q_auto:good,c_fill,ar_4:3/MTczOTM3ODcwNjMxODcyMzUz/handle-hamster.jpg"
      alt="hamster"
    />
  )
}

function Gallery() {
  return (
    <section>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

export default function Congratulations() {
  return <h1>Good Job</h1>
}
