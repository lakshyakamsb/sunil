import React from 'react';

const About = () => {
    const divStyle = {
        marginTop: '100px',
      };
      
  return (
    <div style={divStyle} className="container mt-5 ">
      <div className="row">
        <div className="col-md-6">
          <h1 style={divStyle}>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur odio sit amet justo vestibulum, vel convallis lorem
            vulputate. Fusce id nisl at purus cursus condimentum.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore rerum ipsam qui voluptates, reiciendis provident unde beatae sequi ullam officiis. Laboriosam tempore totam voluptates provident magni, in odit labore dolore enim ad aliquam voluptatibus iusto aut dolores eos animi saepe praesentium facere repellat! Nulla ipsa officia quae necessitatibus minima, perspiciatis nobis inventore sapiente ullam culpa porro rem corrupti tempora neque nisi commodi aspernatur odio placeat maxime! Quae nobis error magni. Quo, maxime. Laboriosam molestias sapiente eaque consequatur labore atque eligendi cumque dolor praesentium totam dolores, hic temporibus facere dicta sequi recusandae fuga illum suscipit ea similique vero eius tenetur laborum. At perspiciatis autem laborum laudantium explicabo aliquam. Quam quos unde est maiores dicta. Quidem tenetur vero deserunt quam molestias nisi tempora dolore beatae reprehenderit, obcaecati sint omnis illum excepturi qui. Corporis quidem eligendi ipsam voluptatibus doloremque dolore aliquid debitis nihil impedit soluta maiores, reprehenderit assumenda dicta libero accusantium quos odit laudantium neque quaerat a, nostrum quia repudiandae ipsa. Nihil consequatur adipisci corrupti id aliquam, tempora eligendi reprehenderit eos officia quis. Exercitationem, ea. Eius accusamus in aperiam quisquam voluptatibus quis odit? Blanditiis, unde soluta eum quam fuga, cum in vitae voluptatibus numquam iure laborum dolorem neque impedit officia aut nesciunt sunt autem eius sapiente. Perspiciatis fugit eius aspernatur ratione explicabo blanditiis quas ipsam, quo dolorum voluptatem consequatur optio molestiae. Iste aut nihil assumenda vel cum officiis ullam itaque pariatur alias dolore nisi officia nulla culpa explicabo illo provident perferendis dolor eos eligendi, debitis voluptate exercitationem ad! Ad, dicta. Iste libero, quidem debitis rerum incidunt laborum at numquam vitae provident aliquid repudiandae! Tempore a dicta natus obcaecati, alias delectus aliquid eligendi, beatae cumque harum facilis illum maxime dignissimos ea eius accusantium ducimus similique quasi corporis. Modi soluta quaerat odit repellat. Veritatis, eum laudantium est tenetur nam non, eaque sunt, vel odit inventore nemo unde illum nisi molestias nulla obcaecati. Eius natus sint voluptatum nam sunt! Praesentium autem nesciunt dolores ea corporis iste tempore, doloremque recusandae harum asperiores error omnis totam officia consequatur, dicta saepe fuga odio tenetur provident voluptate velit! Dolorum veniam deserunt eveniet rem, quod quibusdam dolorem molestias sapiente quis ratione, aut inventore quisquam repellendus aliquid. Ut delectus ipsa rerum impedit. Et nulla possimus, in tenetur vero beatae eos molestias minima debitis natus voluptate? Dicta nemo blanditiis tenetur adipisci deleniti nobis eum accusantium aspernatur quod mollitia rem sed quibusdam sint dolorem veritatis delectus asperiores ab quos, vel cumque esse natus? Aperiam?</p>
        </div>
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + '/image/lkl.jpg'}
            alt="this is about img"
            className="img-fluid"
          />
        </div>
      </div>

     

    </div>
  );
};

export default About;
