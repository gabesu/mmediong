import "./../css/about.css";
import Image from "next/image";

export default function About() {
  return (
    <main className="about_page">
      {/* Section about overview text */}
      <div className="about_block">
        <section className="about_content">
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
              Planes Live was a flight tracking app tailored to and mostly used
              by plane spotters — aviation enthusiasts who observe, photograph
              and document planes. However, analytics and in‑app surveys
              revealed that our &quot;power users&quot; were actually travelers.
              Moreover, this much smaller user group generated a major portion
              of the app&apos;s revenue.
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
            <h3>Role</h3>
            <p>Senior Product Designer</p>
          </div>
        </section>

        {/* Section with about images and videos */}
        <section className="about_images">
          <div className="image_block">
            <div className="about_media">
              <Image
                className="about_image"
                src="/test.jpeg"
                alt="Pocketapp"
                width={600}
                height={400}
              />
            </div>
            <div className="about_media_caption">
              <p>Pocketapp</p>
            </div>
          </div>
        </section>
      </div>
      <div className="about_block">
        <section className="about_content content_flip">
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
              Planes Live was a flight tracking app tailored to and mostly used
              by plane spotters — aviation enthusiasts who observe, photograph
              and document planes. However, analytics and in‑app surveys
              revealed that our &quot;power users&quot; were actually travelers.
              Moreover, this much smaller user group generated a major portion
              of the app&apos;s revenue.
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
            <h3>Role</h3>
            <p>Senior Product Designer</p>
          </div>
        </section>

        {/* Section with about images and videos */}
        <section className="about_images">
          <div className="image_block">
            <div className="about_media">
              <Image
                className="about_image"
                src="/test.jpeg"
                alt="Pocketapp"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="about_media_caption">
              <p>Pocketapp</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
