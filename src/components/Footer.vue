<template>
    <div class="fixed-bottom mobile-only q-gutter-y-md" style="max-width: 900px">
        <q-tabs inline-label class="bg-red-10 text-white shadow-2">
            <q-route-tab icon="home" label="Home" to="/" exact />
            <!-- <q-route-tab icon="record_voice_over" label="About" to="/about" /> -->
            <q-route-tab icon="star" label="Portfolio" to="/portfolio" />
            <q-route-tab icon="code" label="Poems" to="/poem" />
            <q-route-tab icon="http" label="Tech" to="/tech" />
            <q-route-tab icon="call_split" label="Others" to="/others" />
            <q-route-tab icon="send" label="Contact" to="/contact" />
    
        </q-tabs>
    
    
    </div>
</template>

<script>
</script>

<style>

</style>
