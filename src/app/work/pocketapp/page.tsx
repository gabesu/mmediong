import "./../../css/work.css";
import Image from "next/image";

export default function Pocketapp() {
  return (
    <main className="work_page">
      {/* Section work overview text */}
      <section className="work_content">
        <h2>Pocketapp</h2>
        <div className="content_block">
          <h3>Overview</h3>
          <p>
            Pocketapp is a mobile application that allows users to track their
            expenses and manage their finances.
          </p>
        </div>

        <div className="content_block">
          <p>
            Planes Live was a flight tracking app tailored to and mostly used by
            plane spotters — aviation enthusiasts who observe, photograph and
            document planes. However, analytics and in‑app surveys revealed that
            our 'power users' were actually travelers. Moreover, this much
            smaller user group generated a major portion of the app's revenue.
          </p>
        </div>

        <div className="content_block">
          <p>
            After a couple of user interviews, we decided to transform the app
            from flight tracker to flight assistant to better serve and expand
            this user group. I was in charge of redesigning main travelers'
            touchpoints — saved flight card, app navigation and flight details
            page. 
          </p>
        </div>

        <div className="content_block">
          <h4>Role</h4>
          <p>Senior Product Designer</p>
        </div>
      </section>

      {/* Section with work images and videos */}
      <section className="work_images">
        <div className="image_block">
          <div className="work_media">
            <Image
              className="work_image"
              src="/test.jpeg"
              alt="Pocketapp"
              width={600}
              height={400}
            />
          </div>
          <div className="work_media_caption">
            <p>Pocketapp</p>
          </div>
        </div>
        <div className="image_block">
          <div className="work_media">
            <video
              src="/pocket_card.mp4"
              width={600}
              height={400}
              autoPlay
              muted
              loop
              playsInline
              className="work_video"
            ></video>
          </div>
          <div className="work_media_caption">
            <p>Pocketapp</p>
          </div>
        </div>
        <div className="image_block">
          <div className="work_media">
            <Image
              className="work_image"
              src="/test.jpeg"
              alt="Pocketapp"
              width={600}
              height={400}
            />
          </div>
          <div className="work_media_caption">
            <p>Pocketapp</p>
          </div>
        </div>
        <div className="image_block">
          <div className="work_media">
            <video
              src="/pocket_card.mp4"
              width={600}
              height={400}
              autoPlay
              muted
              loop
              playsInline
              className="work_video"
            ></video>
          </div>
          <div className="work_media_caption">
            <p>Pocketapp</p>
          </div>
        </div>
      </section>
    </main>
  );
}
