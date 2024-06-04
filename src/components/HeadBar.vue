<template>
    <nav className="navbar">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/other">Other Page</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'HeadBar'
};
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 6%;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

li {
    margin-right: 1rem;
}
</style>
