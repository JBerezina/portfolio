import "./Testimonials.css"

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" alt="" />
                        <img src = "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <img src="assets/youtube.png" alt="" />
                    </div>
                    <div className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, non quisquam officia ex veritatis architecto nisi, rerum harum aperiam culpa autem corrupti porro perferendis! Officiis repellat sint tempora voluptatem ipsum.</div>
                    <div className="bottom">
                        <h3>Alex</h3>
                        <h4>CEO of LAMA</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
