<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="180" height="180" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			质量保障
		</p>

		<p class="author__links">
			<!-- <a href="//twitter.com/gridsome">Follow on Twitter</a> -->

			<a href="//github.com/Tangyiming">GitHub</a>
			<!-- <a href="/my-resume">Resume</a> -->
			<!-- <a class="author__links__qrcode" href="javascript:">一门性能课（公众号）</a> -->
		</p>



	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
			text-decoration: none;
			border-bottom: 1px solid #ACC0D8;
		}

		&__qrcode {
			position: relative;
		}

		&__qrcode::after {
			content: url(../assets/images/qrcode.jpg);
			position: absolute;
			right: -68px;
			top: -265px;
			z-index: 99;
			width: 258px;
			height: 258px;
			border: 5px solid #0095ba;
			border-radius: 4px;
			-webkit-transform-origin: top right;
			transform-origin: bottom left;
			-webkit-transform: scale(0);
			transform: scale(0);
			opacity: 0;
			-webkit-transition: all .4s ease-in-out;
			transition: all .4s ease-in-out;
		}

		&__qrcode:hover::after {
			transform: scale(1);
			opacity: 1;
		}
	}
}
</style>