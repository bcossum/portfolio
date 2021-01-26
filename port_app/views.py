from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.
# def index(request):
#   return render(request, 'index.html')

def index(request):
  if request.method == "GET":
    return render(request, 'index.html')
  else:
    message_name = request.POST.get('name') 
    message = "From: "+ request.POST.get('email') + " - " + request.POST.get('message') 
    message_email = request.POST.get('email') 
    send_mail( 
      message_name,#subject 
      message, 
      message_email,#from who 
      ['ben.cossum@gmail.com'], #to who 
    ) 
    return redirect('/') 

def successView(request):
  return HttpResponse('Success! Thank you for your message.')