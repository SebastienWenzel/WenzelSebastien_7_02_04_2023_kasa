import { Link } from 'react-router-dom';
function NotFoundPages() {
	return (
		<div className='notfound'>
			<div className="notfound__elements">
				<h1 className='notfound__elements--title'>404</h1>
				<p className='notfound_elements--content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='notfound__elements--backhome' to='/'><p>Retourner sur la page d'accueil</p></Link>
		</div>
	)
}
export default NotFoundPages