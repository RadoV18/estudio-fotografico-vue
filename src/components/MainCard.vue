<template>
    <div class="photo-card">
        <div class="photo-card__image">
            <img :src="require(`@/assets/img/photography.jpg`)" alt="Estudio Fotográfico">
        </div>
        <div class="photo-card__content">
            <h2 class="content__title">Nuestro servicio de fotografía incluye:</h2>
            <ul class="content__list">
                <li>- Sesiones de fotos de día completo o medio día con todo el equipo necesario</li>
                <li>- Kits de cámaras y lentes profesionales</li>
                <li>- Configuración de iluminación profesional.</li>
                <li>- Edición de fotografías, corrección de color y retoque.</li>
                <li>- Alojamiento de biblioteca de fotos</li>
            </ul>
            <div class="content__link">
                <router-link to="/requirements">Más Información</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainCard'
}
</script>

<style>
    .photo-card {
        height: 30%;
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        padding: 2rem;
    }

    .photo-card__content {
        border: 1px solid rgba(0,0,0,0.25);
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .photo-card__image {
        width: 100%;
    }

    .photo-card__image img {
        max-height: 100%;
        width: 80%;
        object-fit: contain;
        margin: 0 auto;
        border-radius: 5px;
    }

    .content__title {
        text-align: center;
    }

    .content__list {
        flex-grow: 2;
        margin: 1rem 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .content__link {
        display: flex;
        justify-content: center;
    }

    .content__link a {
        text-decoration: none;
        color: white;
        background: #30475e;
        padding: 1rem;
        border-radius: 2rem;
    }

    .content__link a:hover {
        background: #001e26;
    }
</style>
