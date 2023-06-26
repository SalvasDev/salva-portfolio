import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import BasicLayout from '../../layouts/BasicLayout/BasicLayout'
import { dbProjects } from '../../utilities/dbProjects'
import ButtonDetail from '../../components/buttonDetail'


export default function Project() {

  const [showVerticalBtnDetail, setShowVerticalBtnDetail] = useState(false)

  const router = useRouter()
  const { project, platform } = router.query

  const found = dbProjects.find(element => (element?.name === project && element?.area === platform));
  var htmlContent = { __html: found?.description };


  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url !== '/') {
        window.history.pushState({}, null, '/');
        // window.location.reload();
        router.replace('/')
        window.scrollTo({ top: 0 });


      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const distanceInPercentage = (distanceFromTop / totalHeight) * 100;

      if (distanceInPercentage >= 5) { // Cambia este valor para el porcentaje que desees
        setShowVerticalBtnDetail(true)
      } else {
        setShowVerticalBtnDetail(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var ind = 1
  return (
    <>
      <Head>
        <title>
          {project} | {platform}
        </title>
      </Head>

      <BasicLayout>
        <div className="detail__container center">
          <section className="detail__info center">
            <div className="detail__data animate__animated animate__fadeInLeft">
              <h2 className="detail__title">{found?.name}</h2>
              <div className="detail__vertical-line"></div>
              <h3 className="detail__area">{(found?.area || '').charAt(0).toUpperCase() + (found?.area || '').slice(1)}</h3>
              <h3 className="detail__element">Diseño: {found?.designed}</h3>
              {found?.developed && <h3 className="detail__element">Desarrollo: {found?.developed}</h3>}
              <h4 className="detail__share">Compartir en: <a href={`https://www.facebook.com/sharer/sharer.php?u=https://odissy.vercel.app/${found?.area}/${found?.name}`} target='_blank' rel='noreferrer'>FB</a></h4>
            </div>
            <div>
              <div className="description animate__animated animate__fadeInRight" dangerouslySetInnerHTML={htmlContent} />
              <div className="projects__labels">
                <a href={found?.code} target="_blank" rel="noopener noreferrer"><button className="projects__btn">Código</button></a>
                <a href={found?.demo} target="_blank" rel="noopener noreferrer"><button className="projects__btn">Demo</button></a>
              </div>
            </div>
          </section>

          <section className="detail__gallery center">
            {
              (found?.pics || []).map(img => {
                ind = ind + 1
                return (
                  <>
                    <div key={ind.toString()} className="detail__image center animate__animated animate__fadeInUp">
                      <Image className="detail__pic center" width='1920' height='1280' src={img} alt='Imágenes del proyecto' />
                    </div>
                  </>
                )
              })
            }
          </section>
          {
            showVerticalBtnDetail && <ButtonDetail smart__class='vertical__arrowbtn-detail' />
          }
        </div>
      </BasicLayout>
    </>
  )
}


