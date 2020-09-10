import React, { Component, useState, useEffect } from 'react';
import './youtubeVideos.css';
import { Link } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Header from "../../components/Header/Header.js";
import SkeletonCard from './skeletonCard.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const API_KEY = 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I';
const channelID = 'UC8KBEuXc5mdz0N5roXTbyVA';
const result = 20;

const BaseURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: '5rem'
	},
	card: {
		margin: '0rem 8rem',
		boxShadow: 'none',
		[theme.breakpoints.down("sm")]: {
			margin: '0rem 1rem'
		}
		// margin: theme.spacing(2),
	},
	smallCardSkeleton: {
		maxWidth: '72%',
		flexBasis: '21%',
		cursor:'pointer',
		[theme.breakpoints.down("sm")]: {
			maxWidth: '100%',
			flexBasis: '0%',
		}
	},
	media: {
		height: 400,
	},
}));
const YoutubeVideo = (props) => {
	const classes = useStyles();

	const [fetchingVideos, setfetchingVideos] = useState(true);
	const [videoSrc, setvideoSrc] = useState('');
	const [videoDesc, setvideoDesc] = useState('');
	const [videoTitle, setvideoTitle] = useState('');

	const [chunkVideos, setchunkVideos] = useState([]);

	const playnewvideo = (newvideourl,newvideodesc,newvideotitle) =>{
		setvideoSrc(`https://www.youtube.com/embed/${newvideourl}`)
		setvideoDesc(newvideodesc)
		setvideoTitle(newvideotitle)
	}


	useEffect(() => {
		fetch(BaseURL)
			.then(rawdata => rawdata.json())
			.then((response) => {
				console.log('Response  from Youtube...', response)
				setTimeout(() => {
					setvideoSrc(`https://www.youtube.com/embed/${response.items[0].id.videoId}`)
					setvideoDesc(response.items[0].snippet.description)
					setvideoTitle(response.items[0].snippet.title)
					setchunkVideos(response.items)
					setfetchingVideos(false)
					console.log('chunkVideos', chunkVideos)
				}, 2000)
			})
			.catch((err) => setfetchingVideos(true))
	}, [])

	return (

		<React.Fragment>
			<Header
				brand="Well Woman"
				rightLinks={<HeaderLinks />}
				fixed
				color="darkpink"
				changeColorOnScroll={{
					height: 400,
					color: "white"
				}}
			/>
			{
				fetchingVideos ? <SkeletonCard /> :
					<React.Fragment>
						{/* <div className='ui embed'>
							<iframe src={this.state.videoSrc} allowFullScreen title='Video player' />
						</div> */}

						<div className={classes.root}>
							<Grid container
								container
								direction="row"
								justify="center"
								alignItems="center"
								spacing={3}>
								<Grid item xs={12} md={12} lg={12}>
									<Card className={classes.card}>
										<CardHeader />
										<CardMedia
											component="iframe"
											alt="Diet Food"
											className={classes.media}
											height="140"
											image={videoSrc}
											title="Diet Food"
										/>
										<CardContent>

											<Typography variant="h6" className="text-black" component="p">
												{videoTitle}
											</Typography>
											<Typography variant="subtitle2" className="mt-2 text-black" component="p">
												{'Description :' + videoDesc}
											</Typography>

										</CardContent>
									</Card>
								</Grid>
									{(chunkVideos).map((item, index) => (

										<Grid item xs={12} key={index} md={4} lg={3} className={classes.smallCardSkeleton} onClick={() => playnewvideo(item.id.videoId,item.snippet.description,item.snippet.title)}>
											<Box key={index} width={210} marginRight={0.5} my={5}>

												<img style={{ width: item.snippet.thumbnails.high.width, height: '200px' }} alt={item.snippet.title} src={item.snippet.thumbnails.high.url} />

												<Box pr={2}>
													<Typography gutterBottom variant="body2">
														{item.snippet.title}
													</Typography>
													<Typography display="block" variant="caption" color="textSecondary">
														{item.snippet.channelTitle}
													</Typography>
													<Typography variant="caption" color="textSecondary">
														{item.snippet.publishedAt}
													</Typography>
												</Box>

											</Box>
										</Grid>
									))}
								</Grid>
						</div>
					</React.Fragment>
			}
		</React.Fragment>
	);
}

export default YoutubeVideo;