<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import type { FullAutoFill } from "svelte/elements"

  let errors: { [fieldName: string]: string } = $state({})
  let loading = $state(false)

  interface FormField {
    id: string
    label: string
    inputType: string
    autocomplete: FullAutoFill
  }

  const formFields: FormField[] = [
    {
      id: "first_name",
      label: "Vorname",
      inputType: "text",
      autocomplete: "given-name"
    },
    {
      id: "last_name",
      label: "Nachname",
      inputType: "text",
      autocomplete: "family-name"
    },
    {
      id: "email",
      label: "E-Mail",
      inputType: "email",
      autocomplete: "email"
    },
    {
      id: "company",
      label: "Firma",
      inputType: "text",
      autocomplete: "organization"
    },
    {
      id: "message",
      label: "Nachricht",
      inputType: "textarea",
      autocomplete: "off"
    }
  ]

</script>

<div class="min-h-[70vh] pb-8 pt-[5vh] container mx-auto max-w-3xl ">
  <div class="absolute bottom-100 right-45 w-200 h-200 pointer-events-none opacity-20 sm:opacity-40 -z-10">
    <img
      src="/mustermarke.svg"
      alt=""
      class="w-full h-full object-contain -rotate-45"
    />
  </div>
  <div class="bg-base-100 p-10">
    <h1 class="text-3xl font-bold mb-8">Kontakt</h1>
    <div
      class="flex flex-col lg:flex-row mx-auto my-4 place-items-center lg:place-items-start place-content-center">
      <div
        class="max-w-[400px] lg:max-w-[500px] flex flex-col place-content-center p-4 lg:mr-8 lg:mb-8 bg-base-100"
      >
        <div class="px-6">
          <p class="text-lg">Reden Sie mit unserem Team über:</p>
          <ul class="list-disc list-outside pl-6 py-4 space-y-1">
            <li class="">Preise</li>
            <li>technische Anforderungen</li>
            <li>zusätzlichen Speicherplatz</li>
          </ul>
          <p>Nach Ihrer Anfrage kümmern wir uns persönlich über Ihre Anliegen und melden uns schnellstmöglich bei
            Ihnen.</p>
        </div>
      </div>

      <div
        class="flex flex-col grow m-4 lg:ml-10 min-w-[300px] stdphone:min-w-[360px] max-w-[400px] place-content-center bg-base-100"
      >
        <div class="card card-bordered shadow-lg p-4 pt-6 mx-2 lg:mx-0 lg:p-6">
          <form
            class="form-widget flex flex-col"
          >
            {#each formFields as field}
              <label for={field.id}>
                <div class="flex flex-row">
                  <div class="text-base font-bold">{field.label}</div>
                  {#if errors[field.id]}
                    <div class="text-error grow text-sm ml-2 text-right">
                      {errors[field.id]}
                    </div>
                  {/if}
                </div>
                {#if field.inputType === "textarea"}
                <textarea
                  id={field.id}
                  name={field.id}
                  autocomplete={field.autocomplete}
                  rows={4}
                  class="{errors[field.id]
                    ? 'input-error'
                    : ''} h-24 input-sm mt-1 input input-bordered w-full mb-3 text-base py-4"
                ></textarea>
                {:else}
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.inputType}
                    autocomplete={field.autocomplete}
                    class="{errors[field.id]
                    ? 'input-error'
                    : ''} input-sm mt-1 input input-bordered w-full mb-3 text-base py-4"
                  />
                {/if}
              </label>
            {/each}

            {#if Object.keys(errors).length > 0}
              <p class="text-error text-sm mb-2">
                Please resolve above issues.
              </p>
            {/if}

            <button class="btn btn-primary {loading ? 'btn-disabled' : ''}"
            >Absenden</button
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
