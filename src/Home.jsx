import React from "react";
import {
	FaCar,
	FaHammer,
	FaSprayCan,
	FaStar,
	FaCheck,
	FaArrowRight,
	FaWhatsapp,
	FaCalculator,
	FaImages,
	FaCarCrash,
	FaExclamationTriangle,
	FaCircle,
	FaMapMarkerAlt,
	FaPhone,
	FaClock
} from "react-icons/fa";

const Home = () => (
	<div className="font-sans">
		{/* Header */}
		<header className="bg-white shadow-lg fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						<div className="bg-primary text-white p-3 rounded-lg mr-3">
							<FaCar className="text-2xl" />
						</div>
						<div>
							<h1 className="text-2xl font-bold text-gray-900">AutoPro</h1>
							<p className="text-sm text-gray-600">Chapistería y Pintura</p>
						</div>
					</div>
					<nav className="hidden md:flex space-x-8">
						<a href="#inicio" className="text-gray-700 hover:text-primary transition">Inicio</a>
						<a href="#servicios" className="text-gray-700 hover:text-primary transition">Servicios</a>
						<a href="#trabajos" className="text-gray-700 hover:text-primary transition">Trabajos</a>
						<a href="#testimonios" className="text-gray-700 hover:text-primary transition">Testimonios</a>
						<a href="#contacto" className="text-gray-700 hover:text-primary transition">Contacto</a>
					</nav>
					<div className="flex items-center space-x-4">
						<div className="hidden md:block text-right">
							<p className="text-sm text-gray-600">Llámanos:</p>
							<p className="font-semibold text-primary">+507 6000-0000</p>
						</div>
						<a href="https://wa.me/50760000000?text=Hola,%20necesito%20una%20cotización%20para%20mi%20vehículo" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition flex items-center">
							<FaWhatsapp className="mr-2" /> WhatsApp
						</a>
					</div>
				</div>
			</div>
		</header>

		{/* Hero Section */}
				<section
					id="inicio"
					className="min-h-screen flex items-center pt-20"
					style={{
						background: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect fill='%23334155' width='1200' height='600'/%3E%3Ccircle fill='%234f46e5' opacity='0.1' cx='200' cy='100' r='80'/%3E%3Ccircle fill='%23f59e0b' opacity='0.1' cx='800' cy='300' r='120'/%3E%3Ccircle fill='%2306b6d4' opacity='0.1' cx='1000' cy='500' r='100'/%3E%3C/svg%3E")`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
						Devolvemos la <span className="text-secondary">vida</span> a tu vehículo
					</h2>
					<p className="text-xl md:text-2xl text-white mb-8 opacity-90">
						Chapistería y pintura profesional con más de 15 años de experiencia. 
						Trabajos garantizados y materiales de primera calidad.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<a href="https://wa.me/50760000000?text=Solicito%20cotización%20gratuita" className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center">
							<FaCalculator className="mr-2" /> Cotización Gratuita
						</a>
						<a href="#trabajos" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center">
							<FaImages className="mr-2" /> Ver Trabajos
						</a>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							  <div className="text-[2.5rem] font-bold text-secondary">15+</div>
							<p className="text-white">Años de experiencia</p>
						</div>
						<div className="text-center">
							  <div className="text-[2.5rem] font-bold text-secondary">5000+</div>
							<p className="text-white">Vehículos reparados</p>
						</div>
						<div className="text-center">
							  <div className="text-[2.5rem] font-bold text-secondary">100%</div>
							<p className="text-white">Clientes satisfechos</p>
						</div>
						<div className="text-center">
							  <div className="text-[2.5rem] font-bold text-secondary">12</div>
							<p className="text-white">Meses de garantía</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* Servicios */}
		<section id="servicios" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Ofrecemos servicios completos de chapistería y pintura con los más altos estándares de calidad
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Chapistería */}
					  <div className="bg-white p-8 rounded-xl shadow-lg transition-all border-2 border-transparent hover:-translate-y-2 hover:border-secondary hover:shadow-2xl">
						<div className="bg-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
							<FaHammer className="text-2xl" />
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4">Chapistería Completa</h3>
						<ul className="text-gray-600 space-y-2 mb-6">
							<li><FaCheck className="text-secondary mr-2 inline" />Reparación de abolladuras</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Enderezado de carrocería</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Soldadura especializada</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Cambio de piezas</li>
						</ul>
						<a href="https://wa.me/50760000000?text=Necesito%20servicio%20de%20chapistería" className="text-primary font-semibold hover:text-secondary transition">
							Consultar precio <FaArrowRight className="ml-2 inline" />
						</a>
					</div>
					{/* Pintura */}
					  <div className="bg-white p-8 rounded-xl shadow-lg transition-all border-2 border-transparent hover:-translate-y-2 hover:border-secondary hover:shadow-2xl">
						<div className="bg-secondary text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
							<FaSprayCan className="text-2xl" />
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4">Pintura Automotriz</h3>
						<ul className="text-gray-600 space-y-2 mb-6">
							<li><FaCheck className="text-secondary mr-2 inline" />Pintura completa</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Pintura parcial</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Retoque de rayones</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Pintura personalizada</li>
						</ul>
						<a href="https://wa.me/50760000000?text=Necesito%20servicio%20de%20pintura" className="text-primary font-semibold hover:text-secondary transition">
							Consultar precio <FaArrowRight className="ml-2 inline" />
						</a>
					</div>
					{/* Servicios Adicionales */}
					  <div className="bg-white p-8 rounded-xl shadow-lg transition-all border-2 border-transparent hover:-translate-y-2 hover:border-secondary hover:shadow-2xl">
						<div className="bg-accent text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
							<FaStar className="text-2xl" />
						</div>
						<h3 className="text-2xl font-bold text-gray-900 mb-4">Servicios Premium</h3>
						<ul className="text-gray-600 space-y-2 mb-6">
							<li><FaCheck className="text-secondary mr-2 inline" />Pulido y encerado</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Restauración de faros</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Protección cerámica</li>
							<li><FaCheck className="text-secondary mr-2 inline" />Detallado interior</li>
						</ul>
						<a href="https://wa.me/50760000000?text=Consulta%20sobre%20servicios%20premium" className="text-primary font-semibold hover:text-secondary transition">
							Consultar precio <FaArrowRight className="ml-2 inline" />
						</a>
					</div>
				</div>
			</div>
		</section>

		{/* Proceso de Trabajo */}
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
					<p className="text-xl text-gray-600">5 pasos para devolver tu vehículo como nuevo</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
					<div className="text-center">
						<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluación</h3>
						<p className="text-gray-600 text-sm">Diagnóstico gratuito y detallado</p>
					</div>
					<div className="text-center">
						<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">Cotización</h3>
						<p className="text-gray-600 text-sm">Presupuesto transparente</p>
					</div>
					<div className="text-center">
						<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">Planificación</h3>
						<p className="text-gray-600 text-sm">Cronograma de trabajo</p>
					</div>
					<div className="text-center">
						<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">Ejecución</h3>
						<p className="text-gray-600 text-sm">Trabajo profesional</p>
					</div>
					<div className="text-center">
						<div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">Entrega</h3>
						<p className="text-gray-600 text-sm">Vehículo como nuevo</p>
					</div>
				</div>
			</div>
		</section>

		{/* Antes y Después */}
		<section id="trabajos" className="py-20 bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Antes y Después</h2>
					<p className="text-xl text-gray-300">Conoce la calidad de nuestro trabajo</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Trabajo 1 */}
					<div className="bg-gray-800 rounded-xl overflow-hidden">
						<div className="relative overflow-hidden rounded-xl">
							<div className="bg-red-200 h-48 flex items-center justify-center text-gray-700">
								<div className="text-center">
									<FaCarCrash className="text-4xl mb-2" />
									<p className="font-semibold">ANTES: Choque lateral</p>
								</div>
							</div>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-2">Reparación Completa</h3>
							<p className="text-gray-300 text-sm mb-4">Choque lateral con daño severo. Trabajo completo de chapistería y pintura.</p>
							<div className="flex justify-between text-sm text-secondary">
								<span>Tiempo: 5 días</span>
								<span>Garantía: 12 meses</span>
							</div>
						</div>
					</div>
					{/* Trabajo 2 */}
					<div className="bg-gray-800 rounded-xl overflow-hidden">
						<div className="relative overflow-hidden rounded-xl">
							<div className="bg-yellow-200 h-48 flex items-center justify-center text-gray-700">
								<div className="text-center">
									<FaExclamationTriangle className="text-4xl mb-2" />
									<p className="font-semibold">ANTES: Rayones profundos</p>
								</div>
							</div>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-2">Pintura Parcial</h3>
							<p className="text-gray-300 text-sm mb-4">Múltiples rayones en puerta. Trabajo de lijado y pintura localizada.</p>
							<div className="flex justify-between text-sm text-secondary">
								<span>Tiempo: 2 días</span>
								<span>Garantía: 12 meses</span>
							</div>
						</div>
					</div>
					{/* Trabajo 3 */}
					<div className="bg-gray-800 rounded-xl overflow-hidden">
						<div className="relative overflow-hidden rounded-xl">
							<div className="bg-blue-200 h-48 flex items-center justify-center text-gray-700">
								<div className="text-center">
									<FaCircle className="text-4xl mb-2" />
									<p className="font-semibold">ANTES: Abolladuras</p>
								</div>
							</div>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-semibold mb-2">Enderezado</h3>
							<p className="text-gray-300 text-sm mb-4">Abolladuras por granizo. Técnica PDR sin necesidad de pintura.</p>
							<div className="flex justify-between text-sm text-secondary">
								<span>Tiempo: 1 día</span>
								<span>Garantía: 6 meses</span>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-12">
					<a href="https://wa.me/50760000000?text=Quiero%20ver%20más%20trabajos%20realizados" className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition inline-flex items-center">
						<FaImages className="mr-2" /> Ver Más Trabajos
					</a>
				</div>
			</div>
		</section>

		{/* Testimonios */}
		<section id="testimonios" className="py-20 bg-gradient-to-r from-primary to-accent">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
					<p className="text-xl text-white opacity-90">Más de 5000 clientes satisfechos nos respaldan</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Testimonio 1 */}
					  <div className="p-8 rounded-xl backdrop-blur bg-white/95">
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">M</div>
							<div>
								<h4 className="font-semibold text-gray-900">María González</h4>
								<div className="flex text-yellow-500">
									{[...Array(5)].map((_, idx) => <FaStar key={idx} />)}
								</div>
							</div>
						</div>
						<p className="text-gray-700 italic">"Excelente servicio. Mi carro quedó como nuevo después del accidente. El trabajo de pintura es impecable y cumplieron con los tiempos prometidos."</p>
						<p className="text-sm text-gray-500 mt-4">Servicio: Chapistería completa</p>
					</div>
					{/* Testimonio 2 */}
					  <div className="p-8 rounded-xl backdrop-blur bg-white/95">
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">J</div>
							<div>
								<h4 className="font-semibold text-gray-900">Juan Pérez</h4>
								<div className="flex text-yellow-500">
									{[...Array(5)].map((_, idx) => <FaStar key={idx} />)}
								</div>
							</div>
						</div>
						<p className="text-gray-700 italic">"Súper recomendado. Precios justos, trabajo de calidad y atención personalizada. Ya es la segunda vez que vengo y siempre quedo satisfecho."</p>
						<p className="text-sm text-gray-500 mt-4">Servicio: Pintura y pulido</p>
					</div>
					{/* Testimonio 3 */}
					  <div className="p-8 rounded-xl backdrop-blur bg-white/95">
						<div className="flex items-center mb-4">
							<div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">A</div>
							<div>
								<h4 className="font-semibold text-gray-900">Ana Rivera</h4>
								<div className="flex text-yellow-500">
									{[...Array(5)].map((_, idx) => <FaStar key={idx} />)}
								</div>
							</div>
						</div>
						<p className="text-gray-700 italic">"Profesionales de verdad. Me explicaron todo el proceso y me mantuvieron informada. La garantía me da mucha tranquilidad."</p>
						<p className="text-sm text-gray-500 mt-4">Servicio: Reparación de rayones</p>
					</div>
				</div>
			</div>
		</section>

		{/* Contacto */}
		<section id="contacto" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
					<p className="text-xl text-gray-600">Estamos listos para ayudarte con tu vehículo</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Información de contacto */}
					<div className="space-y-8">
						<div className="flex items-start space-x-4">
							<div className="bg-primary text-white p-3 rounded-lg">
								<FaMapMarkerAlt className="text-xl" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Ubicación</h3>
								<p className="text-gray-600">Vía España, Ciudad de Panamá<br />Frente al Centro Comercial El Dorado</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<div className="bg-secondary text-white p-3 rounded-lg">
								<FaPhone className="text-xl" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
								<p className="text-gray-600">+507 6000-0000</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<div className="bg-green-500 text-white p-3 rounded-lg">
								<FaWhatsapp className="text-xl" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
								<p className="text-gray-600">+507 6000-0000</p>
								<p className="text-sm text-gray-500">Respuesta inmediata</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<div className="bg-accent text-white p-3 rounded-lg">
								<FaClock className="text-xl" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Horarios</h3>
								<p className="text-gray-600">
									Lunes a Viernes: 7:00 AM - 6:00 PM<br />
									Sábados: 8:00 AM - 4:00 PM<br />
									Domingos: Cerrado
								</p>
							</div>
						</div>
					</div>
					{/* Formulario */}
					<div className="bg-white p-8 rounded-xl shadow-lg">
						<h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Cotización</h3>
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
									<input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Tu nombre" />
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
									<input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+507 0000-0000" />
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Marca y modelo del vehículo</label>
								<input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Ej: Toyota Corolla 2018" />
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
								<textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" rows="4" placeholder="Cuéntanos tu caso..."></textarea>
							</div>
							<button type="submit" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition w-full">Enviar Solicitud</button>
						</form>
					</div>
				</div>
			</div>
		</section>

		{/* WhatsApp flotante */}
			<a
				href="https://wa.me/50760000000?text=Hola,%20necesito%20una%20cotización%20para%20mi%20vehículo"
				className="fixed bottom-5 right-5 z-50 animate-pulse bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
				target="_blank"
				rel="noopener noreferrer"
			>
			<FaWhatsapp className="text-3xl" />
		</a>
	</div>
);

export default Home;
