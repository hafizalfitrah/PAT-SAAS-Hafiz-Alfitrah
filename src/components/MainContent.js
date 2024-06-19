import React from 'react';
import { Container, Row, Col, Card, Image, Form, Button, Carousel } from 'react-bootstrap';
import CardComponent from './CardComponent';
import ContactForm from './ContactForm';

const MainContent = () => {
  return (
    <main>
      <Container>
      {/* Baris Pertama */}
      <Row className="my-4 container mx-auto shadow">
        <Col md={6}>
          
          <h1 class="pt-5">SMK TI BAZMA</h1>
          <h5>Ayo kita tingkatkan kualitas anak bangsa </h5>
          <p>SMK TI Bazma merupakan singkatan dari Sekolah Menengah Kejuruan Teknologi Informasi Bazma. Sekolah ini mungkin merupakan lembaga pendidikan di Indonesia yang menawarkan program kejuruan dalam bidang teknologi informasi. </p>
          <Button variant="dark" class="mt-5">selengkapnya</Button>
        </Col>
        <Col md={6}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe 
              className="video mx-auto embed-responsive-item" 
              id='video'
              src="https://www.youtube.com/embed/VIDEO_ID" 
              allowFullScreen>
            </iframe>
          </div>
        </Col>
      </Row>
   
      {/* Baris Kedua */}
      <Row className="my-4" >
        <Col md={4}>
        <Card class="shadow p-1 bg-body-tertiary rounded">
            <Card.Img variant="top" src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" />
            <Card.Body class="p-3">
              <h3>GEDUNG SEKOLAH</h3>
              <hr></hr>
              <Card.Text>ini merupakan tempat dimana para siswa dilatih menjadi siswa yang cerdas, kreatif, dan berakhlak mulia </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card class="shadow p-1 bg-body-tertiary rounded">
            <Card.Img variant="top" src="https://www.smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg" />
            <Card.Body class="p-3">
            <h4>LAPANGAN DAN MASJID</h4>
              <hr></hr>
              <Card.Text>lapangan melatih anak anak untuk menjadi sehat kuat tangkas dan juga bisa menghibur dengan permainan seperti misalnya basket, futsal, dan batminton</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card class="shadow p-1 bg-body-tertiary rounded">
            <Card.Img variant="top" src="https://www.smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg" />
            <Card.Body class="p-3">
            <h3>GEDUNG ASRAMA</h3>
              <hr></hr>
              <Card.Text>disini adalah tempat dimana siswa beristirahat dengan tenang juga gedung ini merupakan salah satu fasilitas terbaik yang ada di sekolah in.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Baris Ketiga */}
      <Row className="my-4">
        <Col md={4}>
          <p><hr></hr></p>
        </Col>
        <Col md={4}>
        <p><hr></hr></p>
        </Col>
        <Col md={4}>
        <p><hr></hr></p>
        </Col>
      </Row>
      <Row> 
        <Col md={2}>
        <h3>berita terkini</h3>
        <hr></hr>
        </Col>
    
   </Row>
      <Row>
        <Col md={2}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNKrJiEP8jYuygxkgBgl3Om4wo4CiGudKNg&s" thumbnail />
        </Col>
        <Col md={2}>
        <h5 class="p-3">khatamil quran</h5>
          <p>di bualan suci ini anak bazma berinisiatif untuk menghatamkan al-quran</p>
        </Col>
        <Col md={2}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEvYSNQDUnWYKK_KYUCgw44igQ72WUllttw&s" thumbnail />
        </Col>
        <Col md={2}>
        <h5 class="p-3">IOT Workshop</h5>
          <p>pada hari ini siswa sedang di datangkan tamu dari luar yang mengajarkan mereka terkait IOT</p>
        </Col>
        <Col md={4} rowSpan={3} classname="poster mx-auto embed-responsive-item" allowFullScreen>
          <Image src="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg" thumbnail />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtB6WYn7lNKEuIs5Is5xM2WPIV2SH7DY_SEYG7PRAh5rWJrBac2P84rUfdrmvMvLj5-4&usqp=CAU" thumbnail />
        </Col>
        <Col md={2}>
        <h5 class="p-3">Hari Pancasila</h5>
          <p>siswa smk ti bazma memperingati hari lahirnya pancasila dengan kegembiraan penuh</p>
        </Col>
        <Col md={2}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgC6GDTGwo2gZ58MLSzUopr8YTgPPJXh7kA&s" thumbnail />
        </Col>
        <Col md={2}>
        <h5 class="p-3">Hari kebangkitan</h5>
          <p>siswa smk ti bazma memperingati hari ikebangkitan nasional</p>
        </Col>
        <Col md={4} rowSpan={3} classname="poster mx-auto embed-responsive-item" allowFullScreen>
          <Image src="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg" thumbnail />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={2}>
          <Image src="https://media.licdn.com/dms/image/D5622AQHsms7yzX8GJw/feedshare-shrink_800/0/1709787241033?e=2147483647&v=beta&t=KdLfgZXXeBLiOg61t9TZic_uG_3HROS4ZliXelFlynY" thumbnail />
        </Col>
        <Col md={2}>
        <h5 class="p-3">Pelantikan Osis</h5>
          <p>Saatnya untuk berganti kepemimpinan siswa dari kelas 12 ke kelas 11</p>
        </Col>
        <Col md={2}>
          <Image src="https://media.licdn.com/dms/image/D5622AQFy3uk6-JZb8Q/feedshare-shrink_800/0/1708224776422?e=2147483647&v=beta&t=-mfAqCqLXWlfLxNRGMXoMqZDY8wOjYVFuzHXdrONGoc" thumbnail />
        </Col>
        <Col md={2}>
        <h5>Test Akademik</h5>
          <p>calon-calon siswa terbaik dipilih melalui forum ini</p>
        </Col>
        <Col md={4} rowSpan={3} classname="poster mx-auto embed-responsive-item" allowFullScreen>
          <Image src="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg" thumbnail />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6} className="text-center">
          <Carousel fade class="shadow bg-body-tertiary rounded">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Row className="justify-content-center align-items-center" style={{ height: '400px', background: '#f8f9fa' }}>
          <Col md={6} className="text-center">
            <Image 
              src="https://media.licdn.com/dms/image/D5603AQHMfrnURdVs-Q/profile-displayphoto-shrink_200_200/0/1696765018371?e=2147483647&v=beta&t=iTubLU5MG7u9fhKu7kA3OtyfoLeVwdsUA02BH3TOHTs" 
              roundedCircle 
              style={{ width: '100px', height: '100px' }} 
            />
            <h3>pak bayu</h3>
            <p className="mt-3">waw bagus banget cocok nih buat dikasih nilai 90 ke atas </p>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </main>
    
  );
};

export default MainContent;
