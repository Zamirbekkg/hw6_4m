import React from 'react'
import global from '../images/global.jpg'
export default function Global() {
  return (
    <div>
        <div className="parent_global">
        <h1>
        Welcome to the world of films
        </h1>
        <h2>Any film genres</h2>
        </div>
        <div className="parent_global_elements">
        <div className="g1">
          <h2>Films</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, blanditiis eligendi dolore vitae amet placeat optio ullam perspiciatis debitis aspernatur ex excepturi modi sit asperiores eveniet necessitatibus voluptas. Veritatis, laudantium!
          Doloremque at fuga ullam? Minus perferendis vel magnam veniam eligendi ullam ab voluptate, minima eum tempora, quidem assumenda deserunt omnis iusto accusantium numquam iste odit. Vitae eius praesentium quasi consectetur.
          Velit placeat natus laudantium minus repellendus voluptatibus quisquam impedit. Saepe aspernatur vero veniam ipsam voluptatum minus nam unde ipsum iste quae, animi nobis, placeat quisquam rerum ratione! Porro, beatae id!
          Expedita laborum soluta aperiam, illum, magnam sed sit unde, iste praesentium libero dolorem! Numquam, suscipit! Explicabo iusto culpa at vitae ipsam numquam! Iusto iure impedit, similique quam voluptate omnis. Voluptates?
          Consequatur nihil illum nostrum eius blanditiis mollitia vitae maiores facilis quas inventore nobis omnis, consequuntur rem placeat dignissimos dolores </p>
        </div>
        <div className="g2">
           <img src={global} alt="" className='image1' />
        </div>
        </div>
        <h1 className='h'>Different genres of films</h1>
        <div className="p_a">
          <div className="g3">
                <h1 className='q'>Horror Films</h1>
          </div>
          <div className="g4">
            <h1 className='q'>Action Filmsм</h1>
          </div>
          <div className="g5">
          <h1 className='q'>Fantasy movies</h1>
          </div>
          <div className="g6">
          <h1 className='q'>Comedy movies</h1>
          </div>
        </div>
    </div>
  )
}
